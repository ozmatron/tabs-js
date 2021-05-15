describe('switchTab()', function(){
        beforeEach(function(){
        document.querySelector('body').innerHTML += '<button class="tabBtns" id="btn1" onclick="switchTab("tab1", "btn1")">Tab 1</button><div id="tab1" class="tabContent"><h3>Tab 1</h3><p>Text</p></div>';
    });
    it('should make tab1 display', function(){

        switchTab('tab1','btn1');

        assert.equal(
            document.getElementById('tab1').style.display, 
            'block'
        );
        
    });
});

describe('switchBackToAnotherTab()', function(){
        beforeEach(function(){
        document.querySelector('body').innerHTML += '<button class="tabBtns" id="btn1" onclick="switchTab("tab1", "btn1")">Tab 1</button><div id="tab1" class="tabContent"><h3>Tab 1</h3><p>Text</p></div><button class="tabBtns" id="btn2" onclick="switchTab("tab2", "btn2")">Tab 2</button><div id="tab2" class="tabContent"><h3>Tab 2</h3><p>Text</p> </div>';
    });
        afterEach(function(){
        switchTab('tab2','btn2')
    });
    it('should make tab2 hide', function(){
        
        switchTab('tab1','btn1')
    
        assert.equal(
            document.getElementById('tab2').style.display, 
            'none'
        );
    });
});