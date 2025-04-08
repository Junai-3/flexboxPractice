// A link to a video explaining Flexbox in detail :
// https://www.youtube.com/watch?v=wsTv9y931o8&ab_channel=Coding2GO

This repository explains all the main uses and properties the flexbox has to offer, and shows how it affects how you interact with websites.



// Parent Properties //



// display: flex;
// Displays the parent container as a flexbox

// flex-direction [row; row-reverse; column; column-reverse; ]
// Controls the axis content items will go along (Row or column)

// flex-wrap [wrap; nowrap;]
// Let's items choose whether they should shrink or move over to the next row down, in order to keep all content on the page

// justify-content [flex-start; flex-end; center; ] 
// Moves items collectively along the main axis (which is dictated by flex-direction)

// align-items [flex-start; flex-end; center; space-between; space-around; space-evenly; ]
// Moves items collectively along the cross axis (which is dictated by flex-direction)

// align-content [space-around; space-between; space-evenly; flex-start; flex-end; center; ]
// Allows items to respond collectively to a single axis instead of an individual axis for every row/columns (treating the container as an individual instead of a collection of rows/columns)

// writing-mode
// Writes text in box items vertically or horizontally, as well as control the direction of items (hortizontal or vertical) 

// gap [px; ]
// Creates a gap between items

// column-gap [px; ]
// Amount of gap in between columns

// row-gap [px; ]
// Amount of gap in between rows



// Child Properties //



// flex: (Takes multiple inputs)
// A combination of three values: flex-basis, flex-grow and flex-shrink

// flex-grow [Integer; 0; ]
// Allows items to grow and expand, where 1 turns it on and 0 turns it off. This property is applied to the items. Items grows relative to each other, you can also set values higher than 1.

// flex-shrink [ Integer; 0; ]
// Allows items to shrink and be squished, where 1 turns it on and 0 turns it off. This property is applied to the items. Items grows relative to each other, you can also set values higher than 1.

// flex-basis
// The initial length of a flexible item

// align-self [flex-start; flex-end; center;]
// Allows you to isolate and move a single item in the flexbox individually along the cross axis

// min-length/min-width [px; ]
// The maximum length/width to which an item can flex to. After reaching the max length, the item will expand no longer

// max-length/max-width [px; ]
// The minimum length/width to which an item can shrink to. After reaching the minimum length, the item will no longer shrink
