js-invisible
=======
Make your JS invisible

Hide your code by invisible characters


Guess what the output is?

```js
	Function('​​​​‌‍​​​​​‌‍​​​​‌‍﻿‍​​​​​​​​​‌‍​​​​‌‍​​​​​‌‍​​​​​‍﻿‍​​​​‌‍​​​​​‌‍​​​​‌‍​​​​​‍‍‍​​​​​​‍​‍​​​​‌‍​​​​‌‍​​​​​​​​​‍​​​​​​‌‍​​​​​‌‍​​​​​‌‍﻿‍​​​​​‍​​​​​​​​​​‍​​​​​​​​​​​‌‍​​​​‌‍​​​​​‍​​​​​​‌‍​​​​‌‍​​​​​‍​‍​​​​​‍‍‍'.replace(/......../g, function($) {         return String.fromCharCode(parseInt($.replace(/./g, function($) {                return {                    '​': '00',                    '': '01',                    '‍': '10',                    '': '11'                }[$]            }), 2))        }))()
```

![](https://github.com/river-lee/js-invisible/blob/master/screenshot/output.pnt)

Why?

```
vim temp
```
![](https://github.com/river-lee/js-invisible/blob/master/screenshot/content.png)
Display invisible characters through vim.