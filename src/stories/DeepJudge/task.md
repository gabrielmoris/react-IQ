Hi,

thank you for your interest in our frontend engineer position - we are excited to see what you can do! We would like to ask you to complete a small coding task as part of our interview process. The task is intended to take around one hour to complete, though we know that this can vary from person to person. The task description is as follows:

**Develop an expandable and contractible text container**

Objective:
You are required to implement the following React component:

```TSX
const ExpandableTextContainer: React.FC<{ text: string; maxLines: number }> = ({
  text,
  maxLines,
}) => {
    // Your code here
}
```

The component takes two props: `text` and `maxLines`. `text` is the main textual content that the component should render. `maxLines` is the maximum number of lines[^1] of text that the component by default should render, inclusive.

If maximum line constraint is preventing the entire text is not being rendered due to the, there should be appear a button below the text saying "show more" which, when clicked, expands the container such that all of `text` is rendered. When the component is in this expanded state, another button should be shown below the text, but this time saying "show less". When the "show less" button is clicked, the component should go back into its collapsed state. If all of `text` can be displayed within the maximum line limit no buttons should be shown.

The component should not limit its width in any way, allowing the rendered text to fill its parent container. If the parent element changes in width, the component should resize to fit.

Finally, we ask that the submitted solution not rely on any dependencies except for React. If you need to use CSS, please simply use inline styling.

Let us know if you have any questions (just send Jonatan a message: jonatan@deepjudge.ai). You can use whatever tools you want (Debugger, Editor, Copilot, ChatGPT, …). Then just send us a tsx/jsx file with your solution once you are done.

Thank you!

[^1]: In this case, "Lines" does not refer to sections of the string which are separated by a newline character. Rather, it refers to the number of actual lines of text rendered on the page when the text is drawn.
