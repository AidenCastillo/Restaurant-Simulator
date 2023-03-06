// const blessed = require('blessed');
import blessed from "blessed";
// // If our box is clicked, change the content.
// box.on('click', function(data) {
// 	box.setContent('{right}Some different {black-fg}content{/black-fg}.{/right}\n');
// 	screen.render();
// });
// box.key('enter', function(ch, key) {
//   box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   box.setLine(1, 'bar');
//   box.insertLine(1, 'foo');
//   screen.render();
// });

class terminal {
  constructor() {
    this.screen = blessed.screen({
      smartCSR: true,
    });
    this.box = blessed.box({
      top: "center",
      left: "center",
      width: "100%",
      height: "100%",
      content: "Restaurant Dashboard{/bold}",
      tags: true,
      border: {
        type: "line",
      },
      style: {
        fg: "white",
        bg: "magenta",
        border: {
          fg: "#f0f0f0",
        },
        hover: {
          bg: "green",
        },
      },
    });


    this.screen.append(this.box);
    this.screen.key(["escape", "q", "C-c"], function (ch, key) {
      return process.exit(0);
    });
    this.box.focus();


  }

  /**
   * "Render the screen."
   *
   * The screen is a special object that is used to display text on the terminal. It is created in the
   * constructor
   */
  render() {
    this.screen.render();
  }
}

// screen.render();
export default terminal;
