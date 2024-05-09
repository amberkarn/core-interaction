let x = 0;
let y = 0;
let speed = 0.15;
let lineHeight;
let endReached = false;
let isAnimating = true;
let menuItems = [];
let toggleButton;

function setup() {
    let cnv= createCanvas(windowWidth, windowHeight);
    cnv.parent ("p5container")
    lineHeight = windowHeight;
    createTopMenu();
    toggleButton = createButton('Stop For A Second');
    toggleButton.class('button');
    toggleButton.mousePressed(toggleAnimation);
  
    resetButton = createButton('You Can Always Begin Again'); // Create reset button
    resetButton.class('button');
    resetButton.mousePressed(resetLine); // Call resetLine() when clicked
    resetButton.hide(); // Hide the reset button initially
  }

 function draw() {
  stroke(0, 100); // Set the stroke color to black with 40% opacity (alpha value of 100)
  strokeWeight(2);
  line(x, y, x, y + lineHeight);
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const menuItemX = menuItem.position().x;
    const menuItemWidth = menuItem.size().width;
    if (x >= menuItemX && x <= menuItemX + menuItemWidth) {
      menuItem.style('color', 'rgba(255, 0, 0, 1)'); // Set menu item color with full opacity
    } else {
      menuItem.style('color', 'rgba(240, 240, 240, 1)'); // Set menu item color with full opacity
    }
  }
  if (!endReached && isAnimating) {
    x += speed;
  }
  if (x >= width) {
    endReached = true;
    toggleButton.hide(); // Hide the toggle button when end is reached
    resetButton.show(); // Show the reset button when end is reached
  } else {
    toggleButton.show(); // Show the toggle button otherwise
    resetButton.hide(); // Hide the reset button otherwise
  }
}


function mouseWheel(event) {
    if (isAnimating) {
      event.preventDefault();
      const delta = event.deltaY;
      const scrollSpeed = Math.abs(delta);
      const smoothScrollAmount = 0;
      function smoothScroll() {
        if (delta < 0) {
          x -= scrollSpeed;
        } else {
          x += scrollSpeed;
        }
        if (delta < 0 ? x > lastScrollPosition : x < lastScrollPosition) {
          requestAnimationFrame(smoothScroll);
        }
      }
      lastScrollPosition = delta > 0 ? x - smoothScrollAmount : x + smoothScrollAmount;
      smoothScroll();
    }
  }

function createTopMenu() {
  const topMenu = select('#top-menu');
  for (let i = 5; i <= 85; i += 5) {
    const menuItem = createSpan(i);
    menuItem.class('menu-item');
    menuItem.mouseClicked(() => {
      const menuItemIndex = menuItems.indexOf(menuItem);
      const menuItemPosition = menuItem.position().y;
      resetLinePosition(menuItemPosition);
    });
    menuItems.push(menuItem);
    topMenu.child(menuItem);
  }
}

function toggleAnimation() {
    isAnimating = !isAnimating;
    if (isAnimating) {
        toggleButton.html('Stop For A Second');
        x = storedX; // Restore the x position when animation resumes
    } else {
        toggleButton.html('Let Time Pass');
    }
}


function resetLine() {
  x = 0; // Reset x position
  endReached = false; // Reset endReached flag
  background('floralwhite'); // Set the background color to oldlace
}

