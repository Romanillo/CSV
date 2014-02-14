var assert = chai.assert;

suite('csv', function() {
    test('Entrada válida 1', function () {
        original.value = '"abc","defg, hi",jk,l\nm,n,ñ,ñ';
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>abc</td>\n            \n              <td>defg, hi</td>\n            \n              <td>jk</td>\n            \n              <td>l</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>m</td>\n            \n              <td>n</td>\n            \n              <td>ñ</td>\n            \n              <td>ñ</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
	
    test('Entrada válida 2', function () {
        original.value = "hi,hiho,h,i\nl\\\"_,lo,he,lo\ni,am,u,l,l";
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>hi</td>\n            \n              <td>hiho</td>\n            \n              <td>h</td>\n            \n              <td>i</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>l\"_</td>\n            \n              <td>lo</td>\n            \n              <td>he</td>\n            \n              <td>lo</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>i</td>\n            \n              <td>am</td>\n            \n              <td>u</td>\n            \n              <td>l</td>\n            \n              <td>l</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
	
	test('Entrada erronea 1', function() {
        original.value = '"ancho", "alto" \n "arriba", "2", 55';
        calculate();
        assert.match(finaltable.innerHTML, /class="error"/);
    });
	
	test('Entrada erronea 2', function() {
        original.value = '"arriba", "abajo" \n "ancho", "4,1", 4';
        calculate();
        assert.match(finaltable.innerHTML, /class="error"/);
    });
})