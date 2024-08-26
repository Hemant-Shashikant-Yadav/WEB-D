<script setup>
// import ComputedProperties from './components/ComputedProperties.vue';

// import EventsInVue from './components/EventsInVue.vue';

// import ReactiveComponent from './components/ReactiveComponent.vue';

// import ModelTwoWayBinding from './components/ModelTwoWayBinding.vue';

// import ComponentEvent from './components/ComponentEvent.vue';
// import { ref } from 'vue';
// let count = ref(0)

// import SlotComponent from './components/SlotComponent.vue';

// import FallbackContent from './components/FallbackContent.vue';

// import ProvideInjectParent from './components/ProvideInjectParent.vue';
// import { provide } from 'vue';
// provide('name','hemant')
// provide('age',20)
// provide('city','sangli')

import WatcherComponent from './components/WatcherComponent.vue';

</script>


<template>
  <h1>This is Vue.Js</h1>
  <!-- <EventsInVue/> -->

  <!-- <ReactiveComponent /> -->

  <!-- <ComputedProperties /> -->

  <!-- <ModelTwoWayBinding /> -->

  <!-- <h5>Count = {{ count }}</h5>
  <ComponentEvent @increment="count++" /> -->

  <!-- <SlotComponent>
    <h5>Slot Component</h5>
    <h5>Slot Component</h5>
  </SlotComponent> -->

  <!-- <FallbackContent> -->
  <!-- </FallbackContent>
  <FallbackContent>
    Given content
  </FallbackContent> -->

  <!-- <ProvideInjectParent /> -->

  <WatcherComponent/>
  


</template>

<!-- 
Reactivity?

Reactivity means that the framework can automatically update ( UI ) when the information behind it changes. 
It's a core concept that allows you to create dynamic and responsive applications without manually manipulating the DOM.

reactive()
ref()
-->

<!-- 
reactive()

The reactive function is used to create reactive objects. A
reactive object is an object where changes to its properties
are automatically detected , triggering updtes in the user interface.

It is a way to make an object "reactive" in Vue.js.
-->

<!-- 
ref()

ref() is used to create a reactive reference to a value. Unlike
the reactive function, which is used for creating reactive
objects, ref is specifically designed for creating reactive single values.
-->

<!-- 
Computed Properties

A computed property is a special kind of variable that automaticlly updates itself whenever the data it depends
on changes.
It's like a little worker that watches certain data, performs
some work on it, and always gives you the most up-to-date
result.
-->

<!-- 
Conditional Rendering

Conditional rendering is refers to the ability to
conditionally display or hide elements in the user
interface based on certain conditions or expressions.
-->

<!-- 
v-for

why :key ?

Efficient DOM Updates
• When Vue renders a list of elements, it uses a virtual DOM to determine the most
efficient way to update the actual DOM. The key helps Vue identify which elements
have changed, been added, or been removed.
• Without keys, Vue may need to recreate the entire DOM structure for each update,
which can be less efficient.


Avoiding Common Pitfalls
• Using key can help avoid common pitfalls, such as duplicate key warnings in the
console or incorrect rendering when items are rearranged in the list.
• Vue relies on keys to track the identity of elements, and using unique keys for each
item ensures that Vue can accurately update the DOM based on changes in the list.

-->
<!-- 

v-model

v-model is a directive that provides two-way data binding
on an input, textarea, or select element. It creates a connection 
between the data in your component and the
input field, allowing changes in one to automatically update
the other and vice versa.

Two Way Binding?

Two-way binding means that changes it your code automatically 
update what you see on the screen, and vice versa. It's like a live
connection between your data and the user interface, making it
easy to keep them in sync without writing a lot of extra code.

-->
<!-- 
props

"props" (short for properties) are a way to pass data from a
parent component to child component
Props you to communicate between components by allowing the parent
component to pass data down to its child components. This is
useful for creating reusable and modular components.


Props are "immutable" which mean', there vague cannot be changed
and they're just readonly.

-->

<!-- 
Component Event?

Component events are a way for child components to
communicate with their parent components
They allow child components to emit events (custom events) that can
be listened to and handled by their parent components.


Child Component Emits an Event

Inside a child component, you can use the $emit method to
trigger a custom event. This event can carry data that you
want to send to the parent.

Parent Component Listens to the Event

In the parent component's template, you can use the v-on
directive (or the shorthand @) to listen for the custom
event emitted by the child.

-->

<!-- 

Slot

A slot is like a space in component where you can put
different things. It allow you to create reusable components
that can accept different content while maintaining a
consistent structure.

Fallback / Default Content

Fallback content in slots refers to the default content that
is displayed when no content is provided for a particular
slot. It's a way to ensure that a component still has 
meaningful content even if the parent component does
not pass any content to a specific slot.

Named Slots

A named slot is way to assign a specific name to a slot in
a component. Unlike the default slot, which is unnamed
and used when no explicit name is provided, named slots
allow you to have multiple slots in a component and specify
where the content should be inserted based on the slot's
name.

-->

<!-- 
  
provide() 
inject()
-->

<!-- 
Lifecycle Hooks

Lifecycle hooks are special methods provided by Vue.js
that allow you to execute code at a diffrent stages of a  
component's lifecycle. These hooks provide developers
with the ability to perform actions or respond to events at
specific points during the creation, updating, and
destruction of a Vue component.

Mount
Mounting means when a component is being created and
inserted into the DOM.


Unmount
Unmounting means when a component is being removed
from the DOM.

onBeforeMount()
Registers a hook to be called right before the component is to
be mounted.
When this hook is called, the component has finished setting
up its reactive state, but no DOM nodes have been created yet.
It is about to execute its DOM render effect for the first time.

onMounted()
onMounted is used for executing logic or actions after a
component has been mounted to the DOM. This hook is
particularly useful for tasks that should occur once the
component is ready to interact with the user, such as fetching
data, setting up event listeners, or performing initial
calculations.

onBeforeUpdate()
Registers a hook to be called right before the component is
about to update its DOM tree due to a reactive state change.
This hook can be used to access the DOM state before Vue
updates the DOM. It is also safe to modify component state
inside this hook.

onUpdated()
Registers a callback to be called after the component has
updated its DOM tree due to a reactive state change.
This hook is called after any DOM update of the component,
which can be caused by different state changes, because
multiple state changes can be batched into a single render
cycle for performance reasons.

onBeforeUnmount()
Registers a hook to be called right before a component
instance is to be unmounted.
When this hook is called, the component instance is still fully
functional.

onUnmounted()
Registers a callback to be called after the component has
been unmounted.
Use this hook to clean up manually created side effects such
as timers, DOM event listeners or server connections. 


Watchers
"watcher 11 allows us to a
specific property or expression and perform some custom
logic when that property or expression changes. Watchers
are part of Vue.jsis reactivity system, which enables the
framework to automatically update the DOM when the
underlying data changes.   
--> 