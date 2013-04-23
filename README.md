#SygUrlVars - GET / SET Url Parameter 

##NAME
jQuery SygRollover

URLパラメータから任意のキーの値を取り出したり、設定したり。

##VERSION
2013.04.23 ver 1.0

* とりあえず公開。

###パラメータ取得
http://hogehoge.com/index.php?foo=bar#abc=xyz
上記のようなURLからパラメータを取得する
``` html
<script>
var params = sygUrlVars.getAllParams();
↓
{ foo:bar, abc:xyz }
</script>
```

###パラメータ設定（ハッシュのみ）
http://hogehoge.com/index.php
↓
http://hogehoge.com/index.php#foo=bar
``` html
<script>
sygUrlVars.setHash( 'foo', 'bar' );
</script>
```

##DESCRIPTION
URLパラメータから値を取得したり、設定したりするものです。
取得はCGIパラメータ、ハッシュの両方から取得できます。
設定はハッシュのみ行えます。


##METHOD

###getAllParams()

全パラメータを取得し、連想配列の形で返します。

``` html
var params = sygUrlVars.getAllParams();
```

###getParam( key )

特定のキーの値を取得します。

``` html
var value = sygUrlVars.getParam('hoge');
```

###setHash( key, val )

ハッシュにキーと値を追加します。

``` html
sygUrlVars.setHash( 'foo','bar' );
```

##OLD VERSION

2012.04.23 ver 1.0

* とりあえず公開。

##AUTHOR
Hiroshi Fukuda <dada@sygnas.jp>  
http://sygnas.jp/

##LICENSE
syg_urlVars

The MIT License

Copyright (c) 2011-2012 Hiroshi Fukuda, http://sygnas.jp/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
