import React from 'react'

class ParentComp extends React.Component {
    state = {childColor: "green", name: "John" }
    
    // is this a method ?
    changeColor = () => {
        const newColor = document.getElementById("colorbox").value;
        this.setState({ childColor: newColor});
    }

    // is this a method? 
    changeName = () => {
        const newName = document.getElementById("namebox").value;
        this.setState({ name: newName });
    }

    render() {
        console.log("Inside render");
        
        return(
            <div>
                Color<input type="text" onChange={this.changeColor} id="colorbox" /> <br />
                Name<input type="text" onChange={this.changeName} id="namebox" />
                <ChildInner color={this.state.childColor} name={this.state.name} />
            </div>
        );
    }
}

class ChildInner extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const txtStyle = { color: this.props.color }    // "color:" this is a new propery key 
        return (
            <span style={txtStyle}>{this.props.name}</span>
        );
    }
}

export default ParentComp;


/*
    Explanation:

### 1\. The Parent's Prop Definition

When you write `<ChildInner color={this.state.childColor} ... />`, the `color` on the left is the **prop name**, and the `{this.state.childColor}` on the right is the **prop value**.

Think of this as `ParentComp` creating a new object with the key `color` and the value from its state.

### 2\. The Child's `props` Object

React takes this object and passes it to the `ChildInner` component's `constructor` as an argument named `props`.

So, inside `ChildInner`, the `props` object looks like this:

```
{
  color: "green", // or whatever the user typed
  name: "John"
}
```

This is why, in the `constructor`, you have to call `super(props)`: it passes this object up to the `React.Component` parent class, which correctly sets `this.props` on your `ChildInner` instance.

### 3\. Accessing the Prop

After the `constructor` runs, you can access the value of the prop anywhere within the `ChildInner` component using `this.props.color`.

For example, in the `render` method, this line:

`const txtStyle = { color: this.props.color }`

is retrieving the value of the `color` prop (`"green"` or the user's input) from the `props` object and using it to set the CSS color style for the `<span>` element.

### Visual Analogy

Think of the parent-child relationship like this:

  * **ParentComp** is a parent preparing a lunchbox for their child.
  * The **`props`** are the items in the lunchbox (e.g., `color`, `name`).
  * The **`<ChildInner ... />`** line is the parent giving the lunchbox to the child.
  * The **`ChildInner`** component is the child, who can open the lunchbox (`this.props`) and use the items inside (`this.props.color`).

The child doesn't know where the food came from or how it was made—it only knows what's in the lunchbox. Similarly, `ChildInner` doesn't know about `ParentComp`'s state; it only knows about the props it receives. 
*/


/*
The `color:` in `const txtStyle = { color: this.props.color }` is a new **key** in a plain JavaScript object. You're creating a new object named `txtStyle` that will be used for inline CSS styling.

Here's the breakdown:

* **`{}`**: This creates a new JavaScript object.
* **`color:`**: This is a new **property key** within that object. This key's name is the same as the CSS property you want to set (`color`).
* **`this.props.color`**: This is the **value** you are assigning to the `color` key. As we discussed, this value is the same as the one held in the parent component's state (`this.state.childColor`).

So, yes, you're creating a new object and assigning the value of the prop to a new key within that object. This new object (`txtStyle`) is then used in your JSX to apply the style:

`<span style={txtStyle}>...</span>`

*/

/*

Here's the breakdown:

* **`const txtStyle = { color: this.props.color }`**: You are creating a JavaScript object named `txtStyle`. This object has a single key-value pair: `color` as the key, and the value from your prop as the value. This object now fully represents the CSS style you want to apply.

* **`<span style={txtStyle}>`**: When you pass this object to the `style` attribute, React understands that it should apply all the CSS properties defined within that object to the `<span>` element. It automatically knows that `txtStyle` contains the properties (like `color`, `fontSize`, etc.) to be applied.

The syntax for passing props and the syntax for inline styles are different because they serve different purposes:

* **Props:** The syntax `<ChildInner color={this.state.childColor} />` is for passing specific, named values to a child component. You use the prop name (`color`) to retrieve its value in the child.

* **Inline Styles:** The syntax `style={txtStyle}` is for applying a complete set of CSS rules to a single HTML element. You pass the entire style object at once. React is designed to handle this object and apply each key-value pair as a style.

Think of it this way:

* **Props (`{...}`):** You're passing a specific item to a function. The function needs to know the name of that item to use it.
* **Style (`{...}`):** You're passing a whole recipe to a rendering engine. The engine knows how to read all the ingredients and apply them without you having to point out each one. 

*/