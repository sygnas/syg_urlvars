/*****************************************

SygUrlVars
version 1.0
Hiroshi Fukuda <dada@sygnas.jp>
http://sygnas.jp/

The MIT License

Copyright (c) 2011-2012 Hiroshi Fukuda, http://sygnas.jp/

******************************************
Usage:
http://hogehoge.com/index.php?foo=bar#abc=xyz
↓
var params = sygUrlVars.getAllParams();
↓
{ foo:bar, abc:xyz }

******************************************

http://hogehoge.com/index.php?foo=bar#abc=xyz
↓
var param = sygUrlVars.getParam('foo');  // 'bar'

******************************************

http://hogehoge.com/
↓
sygUrlVars.setHash( 'foo', 'bar' );
↓
http://hogehoge.com/#foo=bar

******************************************/

var sygUrlVars = {};

/*******************************
* 全URLパラメータとハッシュを分解して取得
*/
sygUrlVars.getAllParams = function()
{
	var params = window.location.href.split(/[\?\&\#]/);
	var vars = {};

	for(var i = 0; i < params.length; i++) 
	{ 
		var pair = params[i].split('='); 
		vars[pair[0]] = pair[1] ? pair[1] : 1; 
	} 
	return vars; 
}

/*******************************
* 特定のパラメータ取得
*/
sygUrlVars.getParam = function( key )
{
	var params = sygUrlVars.getAllParams();
	return params[key]; 
}

/*******************************
* ハッシュを設定
*/
sygUrlVars.setHash = function( key, val )
{
	var hash = window.location.hash.substr(1);
	
	// ハッシュ設定されていなければ新規に
	if( !hash ){
		window.location.hash = key + '=' + val;
		return;
	}
	
	var params = hash.split('&');
	var vars = [];
	var hashstr = "";
	
	vars.push( key + '=' + (val ? val : 1) );

	// 分解
	for(var i = 0; i < params.length; i++) 
	{ 
		var pair = params[i].split('='); 
		
		if( pair[0] != key ){
			vars.push( pair[0] + '=' + (pair[1] ? pair[1] : 1) );
		}
	}
	
	window.location.hash = vars.join('&');
}


