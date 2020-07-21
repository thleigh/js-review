# CSS Review

**This is my review of CSS.**

## Useful Selector Notes
```css
    //The Class Selector (uses a period in front)
    .classSelector {
        font-weight: bold;
        color: #64FE2E; /* green */
    }
    //The ID Selector (uses a # in front)
    #idSelector {V
        font-weight: bold;
        color: #64FE2E;
    }
``` 

## Specificity in CSS
    ![Image of Specificity](https://css-tricks.com/wp-content/csstricks-uploads/specificity-calculationbase.png)

## The Box Model
    ![Image of Box Model](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

## Display and Positioning
```css
    //examples of display types
    .classSelector {
        display: block; //by default, takes up the full width of the page. box model.
    }

    #idSelector {
        display: inline; //only takes up as much width as it needs. no box model
    }

    body {
        display: inline-block; //only takes up as much width as it needs. box model.
    }
```
![Image of Display](https://res.cloudinary.com/daa0gvpyr/image/upload/v1543278655/Screen_Shot_2018-11-26_at_4.29.23_PM_ietkzm.png)

```css
    //examples of position types
    .relative {
        position: relative; //Allows you to position the element top, bottom, left, or right relative to where it would normally occur.
    }

    .fixed {
        position: fixed; //An element with fixed position is positioned relative to the browser window. It will not move even if the window is scrolled, so a fixed positioned element will stay right where it is.
    }
    .absolute {
        position: absolute; //give you the ability to specify coordinates for where the element should go. It is important to know that this removes the element from the document flow and places it exactly where you tell it to be.
    }
```

## Flex and Grid

```css
    //examples of flex
    body {
        min-height: 100vh;
        margin: 0 auto;
        display: flex; //makes it easier to design flexible responsive layout structure without using float or positioning.
        flex-direction: rowl //sets the directional flow of flex items
        justify-content: center; //align along the main axis
        align-items: center; //align along the cross axis
    }   

    body {
        display: grid;
        min-height: 100%;
        grid-template-rows: 200px 1fr 120px;
        grid-template-columns: 180px 1fr;
}
```