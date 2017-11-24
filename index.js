/**
 *
 * max unicode 65535
 */
function encode(text) {
    var i = 0,
        u,
        length = text.length,
        str = '',
        encodeStr = '';
    while (i !== length) {
        //get unicode 
        u = text[i++].charCodeAt()
        //to binary
        str = u.toString(2)
        // max 65535 => 1111111111111111
        if (str.length > 16) {
            continue;
        }
        while (str.length !== 16) {
            str = '0' + str;
        }
        str = str.replace(/\d{2}/g, function(c) {
            return {
                '00': '\u200b',
                '01': '\u200c',
                '10': '\u200d',
                '11': '\ufeff',
            }[c]
        });
        encodeStr += str;
    }
    return encodeStr;
}

function deconde(text) {
    return text.replace(/......../g, function($) {
        return String.fromCharCode(parseInt($.replace(/./g, function($) {
            return {
                '​': '00',
                '‌': '01',
                '‍': '10',
                '﻿': '11'
            }[$]
        }), 2))
    })
}

/**
 *
 */
exports.encode = encode;

exports.deconde = deconde;

exports.jsEncode = function(js){
    return 'Function(\''+ encode(js) +'\'.replace(/......../g, function($) { \
        return String.fromCharCode(parseInt($.replace(/./g, function($) {\
                return {\
                    \'​\': \'00\',\
                    \'‌\': \'01\',\
                    \'‍\': \'10\',\
                    \'﻿\': \'11\'\
                }[$]\
            }), 2))\
        }))()'
}