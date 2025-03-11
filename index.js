import chalk from 'chalk';
import cats from 'cat-ascii-faces';
import boxen from 'boxen';

function coolsolelog(message, messageColor = 'cyan', bubbleColor = 'yellow') {
    console.log(boxen(chalk[messageColor](message), {padding: 1, borderColor: bubbleColor, borderStyle: 'round'}));
    console.log(cats())

}

export default coolsolelog;
 