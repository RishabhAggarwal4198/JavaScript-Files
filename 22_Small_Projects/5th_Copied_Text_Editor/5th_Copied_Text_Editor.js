function formatDoc ( cmd, value=null) {

        if(value){
                document.execCommand(cmd, false , value);  
        } else {
                document.execCommand(cmd);   
        } 
}

function addLink () {
        const url = prompt('Insert url');
        formatDoc('createdLink', url);
}


const content = document.getElementById('content');

content.addEventListener('mouseenter', function (){
        const a = content.querySelectorAll('a')
        // console.log(a);
        a.forEach(item => {
        item.addEventListener('mouseenter', function (){
                        content.setAttribute('contenditable' , false);
                        item.target = '_blank';
                })

        item.addEventListener('mouseleave', function (){
                        content.setAttribute('contenditable' , true);
                        item.target = '_blank';
                })
        })
})



const showCode = document.getElementById('show-code');
const active = false;


showCode.addEventListener('click', function (){
        showCode.dataset.active = !active;
	active = !active
})

