js-invisible
=======
Make your JS invisible

Hide your code by invisible characters


Guess what the output is?

```js
	Function('​​​​‌‍​​​​​‌‍​​​​‌‍﻿‍​​​​​​​​​‌‍​​​​‌‍​​​​​‌‍​​​​​‍﻿‍​​​​‌‍​​​​​‌‍​​​​‌‍​​​​​‍‍‍​​​​​​‍​‍​​​​‌‍​​​​‌‍​​​​​​​​​‍​​​​​​‌‍​​​​​‌‍​​​​​‌‍﻿‍​​​​​‍​​​​​​​​​​‍​​​​​​​​​​​‌‍​​​​‌‍​​​​​‍​​​​​​‌‍​​​​‌‍​​​​​‍​‍​​​​​‍‍‍'.replace(/......../g, function($) {         return String.fromCharCode(parseInt($.replace(/./g, function($) {                return {                    '​': '00',                    '': '01',                    '‍': '10',                    '': '11'                }[$]            }), 2))        }))()
```

![](./screenshot/output.pnt)

Why?

```
vim temp
```
![](./screenshot/content.pnt)
Display invisible characters through VIM