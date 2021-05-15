describe('switchTab()', function(){
        beforeEach(function(){
        document.querySelector('body').innerHTML += '<button id="btn" onclick="switchTab("tab1")">Click Me</button><div id="tab1">This is my DIV element.</div>';
    });
    it('should make tab1 not display', function(){

        switchTab('tab1');

        const greeting = document.querySelector('#tab1');
        assert.equal(
            document.getElementById('tab1').style.display, 
            'none'
        );
        
    });
});

describe('switchBackToTab()', function(){
        beforeEach(function(){
        document.querySelector('body').innerHTML += '<button id="btn" onclick="switchTab("tab1")">Click Me</button><div id="tab1">This is my DIV element.</div>';
    });
        afterEach(function(){
        switchTab('tab1')
    });
    it('should make tab1 display again', function(){
        
        switchTab('tab1')
    
        const greeting2 = document.querySelector('#tab1');
        assert.equal(
            document.getElementById('tab1').style.display, 
            'block'
        );
    });
});