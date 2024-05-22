# Luke-2024-website
This website will be connected to a game that I will make for a game in DTC later in the year.

Chat gpt log:

I used chat gpt to help me with the css for a for the slider for the nav bar when hovering over an element

what i used:

nav a::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0047ab;
    transition: top 0.5s, height 0.5s;
}

nav a:hover::after {
    top: 0;
    height: 100%;
}
