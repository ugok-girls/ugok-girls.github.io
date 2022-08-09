
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                if (info.blocks[i] === block) {
                                    info.blocks[i] = null;
                                }
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }
    function update_await_block_branch(info, ctx, dirty) {
        const child_ctx = ctx.slice();
        const { resolved } = info;
        if (info.current === info.then) {
            child_ctx[info.value] = resolved;
        }
        if (info.current === info.catch) {
            child_ctx[info.error] = resolved;
        }
        info.block.p(child_ctx, dirty);
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);

    function destroy_block(block, lookup) {
        block.d(1);
        lookup.delete(block.key);
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error('Cannot have duplicate keys in a keyed each');
            }
            keys.add(key);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.49.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev('SvelteDOMSetProperty', { node, property, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }
    function loop_guard(timeout) {
        const start = Date.now();
        return () => {
            if (Date.now() - start > timeout) {
                throw new Error('Infinite loop detected');
            }
        };
    }

    /* src/App.svelte generated by Svelte v3.49.0 */

    const { Error: Error_1 } = globals;
    const file = "src/App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[10] = list[i];
    	return child_ctx;
    }

    // (294:2) {:catch error}
    function create_catch_block(ctx) {
    	let p;
    	let t_value = /*error*/ ctx[13].message + "";
    	let t;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t = text(t_value);
    			set_style(p, "color", "red");
    			add_location(p, file, 294, 4, 7121);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*promise*/ 1 && t_value !== (t_value = /*error*/ ctx[13].message + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(294:2) {:catch error}",
    		ctx
    	});

    	return block;
    }

    // (217:2) {:then data}
    function create_then_block(ctx) {
    	let div1;
    	let h1;
    	let t0;
    	let br;
    	let span;
    	let t2;
    	let div0;
    	let button0;
    	let t4;
    	let button1;
    	let t6;
    	let button2;
    	let t8;
    	let button3;
    	let t10;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let t11;
    	let footer;
    	let mounted;
    	let dispose;

    	function click_handler() {
    		return /*click_handler*/ ctx[1](/*data*/ ctx[6]);
    	}

    	function click_handler_1() {
    		return /*click_handler_1*/ ctx[2](/*data*/ ctx[6]);
    	}

    	function click_handler_2() {
    		return /*click_handler_2*/ ctx[3](/*data*/ ctx[6]);
    	}

    	function click_handler_3() {
    		return /*click_handler_3*/ ctx[4](/*data*/ ctx[6]);
    	}

    	let each_value = /*data*/ ctx[6];
    	validate_each_argument(each_value);
    	const get_key = ctx => /*record*/ ctx[7].username;
    	validate_each_keys(ctx, each_value, get_each_context, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			h1 = element("h1");
    			t0 = text("Twitter発信状況一覧");
    			br = element("br");
    			span = element("span");
    			span.textContent = "（過去2週間）";
    			t2 = space();
    			div0 = element("div");
    			button0 = element("button");
    			button0.textContent = "Tweets";
    			t4 = space();
    			button1 = element("button");
    			button1.textContent = "Likes";
    			t6 = space();
    			button2 = element("button");
    			button2.textContent = "Replies";
    			t8 = space();
    			button3 = element("button");
    			button3.textContent = "RTs";
    			t10 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t11 = space();
    			footer = element("footer");
    			footer.textContent = "— UGOK Project since 2017 —";
    			add_location(br, file, 219, 21, 4599);
    			set_style(span, "font-size", "small");
    			add_location(span, file, 219, 27, 4605);
    			set_style(h1, "text-align", "center");
    			attr_dev(h1, "class", "svelte-oq3c2y");
    			add_location(h1, file, 218, 6, 4547);
    			attr_dev(button0, "class", "svelte-oq3c2y");
    			add_location(button0, file, 222, 8, 4694);
    			attr_dev(button1, "class", "svelte-oq3c2y");
    			add_location(button1, file, 228, 8, 4857);
    			attr_dev(button2, "class", "svelte-oq3c2y");
    			add_location(button2, file, 234, 8, 5017);
    			attr_dev(button3, "class", "svelte-oq3c2y");
    			add_location(button3, file, 240, 8, 5183);
    			attr_dev(div0, "class", "btn svelte-oq3c2y");
    			add_location(div0, file, 221, 6, 4668);
    			attr_dev(div1, "id", "ranking");
    			add_location(div1, file, 217, 4, 4522);
    			attr_dev(footer, "class", "svelte-oq3c2y");
    			add_location(footer, file, 292, 4, 7043);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h1);
    			append_dev(h1, t0);
    			append_dev(h1, br);
    			append_dev(h1, span);
    			append_dev(div1, t2);
    			append_dev(div1, div0);
    			append_dev(div0, button0);
    			append_dev(div0, t4);
    			append_dev(div0, button1);
    			append_dev(div0, t6);
    			append_dev(div0, button2);
    			append_dev(div0, t8);
    			append_dev(div0, button3);
    			append_dev(div1, t10);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div1, null);
    			}

    			insert_dev(target, t11, anchor);
    			insert_dev(target, footer, anchor);

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", click_handler, false, false, false),
    					listen_dev(button1, "click", click_handler_1, false, false, false),
    					listen_dev(button2, "click", click_handler_2, false, false, false),
    					listen_dev(button3, "click", click_handler_3, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*promise, localStorage, pickupSort, window*/ 1) {
    				each_value = /*data*/ ctx[6];
    				validate_each_argument(each_value);
    				validate_each_keys(ctx, each_value, get_each_context, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div1, destroy_block, create_each_block, null, get_each_context);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}

    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(footer);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(217:2) {:then data}",
    		ctx
    	});

    	return block;
    }

    // (268:14) {#each record.dailytweets as n}
    function create_each_block_1(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			attr_dev(span, "class", "bar svelte-oq3c2y");
    			set_style(span, "height", /*n*/ ctx[10] * 8 + 1 + "px");
    			add_location(span, file, 268, 16, 6219);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*promise*/ 1) {
    				set_style(span, "height", /*n*/ ctx[10] * 8 + 1 + "px");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(268:14) {#each record.dailytweets as n}",
    		ctx
    	});

    	return block;
    }

    // (248:6) {#each data as record (record.username)}
    function create_each_block(key_1, ctx) {
    	let div4;
    	let div3;
    	let a;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let p;
    	let t1_value = /*record*/ ctx[7].screenname + "";
    	let t1;
    	let a_href_value;
    	let t2;
    	let div1;
    	let t3_value = /*record*/ ctx[7].tweets + "";
    	let t3;
    	let t4;
    	let br0;
    	let t5;
    	let t6_value = /*record*/ ctx[7].likes + "";
    	let t6;
    	let t7;
    	let br1;
    	let t8;
    	let t9_value = /*record*/ ctx[7].replies + "";
    	let t9;
    	let t10;
    	let br2;
    	let t11;
    	let t12_value = /*record*/ ctx[7].retweets + "";
    	let t12;
    	let t13;
    	let t14;
    	let div2;
    	let t15;
    	let span;
    	let t17;
    	let input;
    	let input_checked_value;
    	let t18;
    	let mounted;
    	let dispose;
    	let each_value_1 = /*record*/ ctx[7].dailytweets;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	function click_handler_4(...args) {
    		return /*click_handler_4*/ ctx[5](/*record*/ ctx[7], /*data*/ ctx[6], ...args);
    	}

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			div4 = element("div");
    			div3 = element("div");
    			a = element("a");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			p = element("p");
    			t1 = text(t1_value);
    			t2 = space();
    			div1 = element("div");
    			t3 = text(t3_value);
    			t4 = text(" Tweets");
    			br0 = element("br");
    			t5 = space();
    			t6 = text(t6_value);
    			t7 = text(" Likes");
    			br1 = element("br");
    			t8 = space();
    			t9 = text(t9_value);
    			t10 = text(" Replies");
    			br2 = element("br");
    			t11 = space();
    			t12 = text(t12_value);
    			t13 = text(" RTs");
    			t14 = space();
    			div2 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t15 = space();
    			span = element("span");
    			span.textContent = "▶";
    			t17 = space();
    			input = element("input");
    			t18 = space();
    			if (!src_url_equal(img.src, img_src_value = /*record*/ ctx[7].iconurl)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "プロフィール画像");
    			add_location(img, file, 255, 16, 5732);
    			attr_dev(p, "class", "svelte-oq3c2y");
    			add_location(p, file, 256, 16, 5794);
    			attr_dev(div0, "class", "profile svelte-oq3c2y");
    			add_location(div0, file, 254, 14, 5694);
    			attr_dev(a, "href", a_href_value = "https://twitter.com/" + /*record*/ ctx[7].username);
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "rel", "noopener");
    			attr_dev(a, "class", "svelte-oq3c2y");
    			add_location(a, file, 253, 12, 5600);
    			add_location(br0, file, 260, 36, 5929);
    			add_location(br1, file, 261, 34, 5970);
    			add_location(br2, file, 262, 38, 6015);
    			attr_dev(div1, "class", "snsData svelte-oq3c2y");
    			add_location(div1, file, 259, 12, 5871);
    			set_style(span, "color", "coral");
    			add_location(span, file, 270, 14, 6311);
    			attr_dev(div2, "class", "graph svelte-oq3c2y");
    			add_location(div2, file, 266, 12, 6137);
    			attr_dev(input, "class", "pickup svelte-oq3c2y");
    			attr_dev(input, "type", "radio");
    			attr_dev(input, "name", "pickup");

    			input.checked = input_checked_value = /*record*/ ctx[7].username == localStorage.pickupUser
    			? true
    			: false;

    			add_location(input, file, 272, 12, 6378);
    			attr_dev(div3, "class", "card svelte-oq3c2y");

    			set_style(div3, "background-color", /*record*/ ctx[7].username == localStorage.pickupUser
    			? 'cornsilk'
    			: 'inherit');

    			add_location(div3, file, 249, 10, 5438);
    			attr_dev(div4, "class", "record svelte-oq3c2y");
    			add_location(div4, file, 248, 8, 5407);
    			this.first = div4;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div3);
    			append_dev(div3, a);
    			append_dev(a, div0);
    			append_dev(div0, img);
    			append_dev(div0, t0);
    			append_dev(div0, p);
    			append_dev(p, t1);
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			append_dev(div1, t3);
    			append_dev(div1, t4);
    			append_dev(div1, br0);
    			append_dev(div1, t5);
    			append_dev(div1, t6);
    			append_dev(div1, t7);
    			append_dev(div1, br1);
    			append_dev(div1, t8);
    			append_dev(div1, t9);
    			append_dev(div1, t10);
    			append_dev(div1, br2);
    			append_dev(div1, t11);
    			append_dev(div1, t12);
    			append_dev(div1, t13);
    			append_dev(div3, t14);
    			append_dev(div3, div2);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div2, null);
    			}

    			append_dev(div2, t15);
    			append_dev(div2, span);
    			append_dev(div3, t17);
    			append_dev(div3, input);
    			append_dev(div4, t18);

    			if (!mounted) {
    				dispose = listen_dev(input, "click", click_handler_4, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*promise*/ 1 && !src_url_equal(img.src, img_src_value = /*record*/ ctx[7].iconurl)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*promise*/ 1 && t1_value !== (t1_value = /*record*/ ctx[7].screenname + "")) set_data_dev(t1, t1_value);

    			if (dirty & /*promise*/ 1 && a_href_value !== (a_href_value = "https://twitter.com/" + /*record*/ ctx[7].username)) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (dirty & /*promise*/ 1 && t3_value !== (t3_value = /*record*/ ctx[7].tweets + "")) set_data_dev(t3, t3_value);
    			if (dirty & /*promise*/ 1 && t6_value !== (t6_value = /*record*/ ctx[7].likes + "")) set_data_dev(t6, t6_value);
    			if (dirty & /*promise*/ 1 && t9_value !== (t9_value = /*record*/ ctx[7].replies + "")) set_data_dev(t9, t9_value);
    			if (dirty & /*promise*/ 1 && t12_value !== (t12_value = /*record*/ ctx[7].retweets + "")) set_data_dev(t12, t12_value);

    			if (dirty & /*promise*/ 1) {
    				each_value_1 = /*record*/ ctx[7].dailytweets;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div2, t15);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}

    			if (dirty & /*promise, localStorage*/ 1 && input_checked_value !== (input_checked_value = /*record*/ ctx[7].username == localStorage.pickupUser
    			? true
    			: false)) {
    				prop_dev(input, "checked", input_checked_value);
    			}

    			if (dirty & /*promise, localStorage*/ 1) {
    				set_style(div3, "background-color", /*record*/ ctx[7].username == localStorage.pickupUser
    				? 'cornsilk'
    				: 'inherit');
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    			destroy_each(each_blocks, detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(248:6) {#each data as record (record.username)}",
    		ctx
    	});

    	return block;
    }

    // (213:18)      <div id="loading">       <div class="spinner"></div>     </div>   {:then data}
    function create_pending_block(ctx) {
    	let div1;
    	let div0;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			attr_dev(div0, "class", "spinner svelte-oq3c2y");
    			add_location(div0, file, 214, 6, 4464);
    			attr_dev(div1, "id", "loading");
    			attr_dev(div1, "class", "svelte-oq3c2y");
    			add_location(div1, file, 213, 4, 4439);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(213:18)      <div id=\\\"loading\\\">       <div class=\\\"spinner\\\"></div>     </div>   {:then data}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let html;
    	let script0;
    	let script0_src_value;
    	let script1;
    	let t1;
    	let main;
    	let promise_1;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: true,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 6,
    		error: 13
    	};

    	handle_promise(promise_1 = /*promise*/ ctx[0], info);

    	const block = {
    		c: function create() {
    			html = element("html");
    			script0 = element("script");
    			script1 = element("script");
    			script1.textContent = "window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');";
    			t1 = space();
    			main = element("main");
    			info.block.c();
    			document.title = "Twitter発信状況一覧サイト";
    			attr_dev(html, "lang", "ja");
    			add_location(html, file, 197, 2, 4028);
    			script0.async = true;
    			if (!src_url_equal(script0.src, script0_src_value = "https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")) attr_dev(script0, "src", script0_src_value);
    			add_location(script0, file, 199, 2, 4110);
    			add_location(script1, file, 200, 2, 4199);
    			attr_dev(main, "class", "svelte-oq3c2y");
    			add_location(main, file, 211, 0, 4409);
    		},
    		l: function claim(nodes) {
    			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, html);
    			append_dev(document.head, script0);
    			append_dev(document.head, script1);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, main, anchor);
    			info.block.m(main, info.anchor = null);
    			info.mount = () => main;
    			info.anchor = null;
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			info.ctx = ctx;

    			if (dirty & /*promise*/ 1 && promise_1 !== (promise_1 = /*promise*/ ctx[0]) && handle_promise(promise_1, info)) ; else {
    				update_await_block_branch(info, ctx, dirty);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			detach_dev(html);
    			detach_dev(script0);
    			detach_dev(script1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(main);
    			info.block.d();
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function getData() {
    	/* UGOKメンバーのTweetデータを取得 */
    	const url = 'https://asuka-script.deno.dev';

    	const res = await fetch(url);
    	let data = {};

    	if (res.ok) {
    		data = await res.json();
    	} else {
    		throw new Error(res);
    	}

    	/* localhost用 */
    	/*
    let data = [
      {
        username: 'asuka_ugok',
        iconurl: 'https://pbs.twimg.com/profile_images/1548953110114357249/HiMFCeyg_bigger.jpg',
        date: '2022-07-30T10:45:42.877Z',
        screenname: 'あすか🐱UGOK',
        tweets: 30,
        likes: 10,
        retweets: 30,
        replies: 10,
        id: '2f2c06cf-3942-40b8-970a-9efc9252a058',
        dailytweets: [3, 2, 1, 0, 3, 4, 2, 0, 1, 4, 2, 3, 1, 2],
      },
      {
        username: 'meru_ugok',
        iconurl: 'https://pbs.twimg.com/profile_images/1525801816466014208/LusQm_2I_bigger.jpg',
        date: '2022-07-30T10:45:47.674Z',
        screenname: 'める🐳UGOK',
        tweets: 20,
        likes: 30,
        retweets: 10,
        replies: 20,
        id: '9f5626cd-5c8a-4741-9eec-2975ef82e857',
        dailytweets: [1, 0, 1, 1, 0, 2, 0, 1, 1, 0, 1, 0, 2, 0],
      },
      {
        username: 'nile_ugok',
        iconurl: 'https://pbs.twimg.com/profile_images/1456606638346227712/1CH3HWLa_bigger.jpg',
        date: '2022-07-30T10:45:48.212Z',
        screenname: 'いとう🏓UGOK',
        tweets: 10,
        likes: 20,
        retweets: 20,
        replies: 30,
        id: '73092af9-ecb3-44e3-ac2f-07d12b8d9904',
        dailytweets: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      },
    ];
    */
    	/* 表示順 */
    	// 50音
    	// const sortedData = data.sort((a, b) => a.screenname.localeCompare(b.screenname), 'ja');
    	// Tweet数順
    	const sortedData = data.sort((a, b) => b.tweets - a.tweets);

    	for (const d of sortedData) {
    		// d.dailytweets = d.dailytweets.reverse(); // localhost用
    		d.dailytweets = JSON.parse(d.dailytweets).reverse();
    	}

    	return pickupSort(sortedData);
    }

    /* 以下、ツール関数 */
    function pickupSort(data) {
    	const pickupUser = localStorage.pickupUser;
    	if (!pickupUser) return data;
    	const pickedID = data.findIndex(card => card.username == pickupUser);
    	const pickedCard = data.splice(pickedID, 1)[0];
    	data.unshift(pickedCard);
    	return data;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let promise = getData();
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	const click_handler = data => {
    		data.sort((a, b) => b.tweets - a.tweets);
    		$$invalidate(0, promise);
    	};

    	const click_handler_1 = data => {
    		data.sort((a, b) => b.likes - a.likes);
    		$$invalidate(0, promise);
    	};

    	const click_handler_2 = data => {
    		data.sort((a, b) => b.replies - a.replies);
    		$$invalidate(0, promise);
    	};

    	const click_handler_3 = data => {
    		data.sort((a, b) => b.retweets - a.retweets);
    		$$invalidate(0, promise);
    	};

    	const click_handler_4 = (record, data, ev) => {
    		if (record.username == localStorage.pickupUser) {
    			delete localStorage.pickupUser;
    			$$invalidate(0, promise);
    		} else {
    			localStorage.pickupUser = record.username;
    			$$invalidate(0, data = pickupSort(data));
    			window.scrollTo({ top: 0, behavior: 'smooth' });
    		}
    	};

    	$$self.$capture_state = () => ({ loop_guard, getData, promise, pickupSort });

    	$$self.$inject_state = $$props => {
    		if ('promise' in $$props) $$invalidate(0, promise = $$props.promise);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		promise,
    		click_handler,
    		click_handler_1,
    		click_handler_2,
    		click_handler_3,
    		click_handler_4
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
      target: document.body,
      props: {},
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
