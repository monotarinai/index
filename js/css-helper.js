class css_features{
    constructor(){
        this.winWidth=screen.width;
        this.winHeight=screen.height;
        this.winOrientation=this.winWidth > this.winHeight ? "landscape" : "portrait";
    }
    width_class_set(){
        //setup the o-width-n class

        // n=12
        // o-width can have 12 different size
        var division=12;
        var defaultPercentage=100;
        var className;
        var element;
        var length;
        var takenPercentage;

        if(this.winOrientation=='landscape'){
            className='l-width-';
            for(var x=1;x<=division;x++){
                element=document.getElementsByClassName(className+x);
                length=element.length;
                takenPercentage=defaultPercentage/12*x;
                
                // if the class l-width-n has more than one member
                for(var y=0;y<length;y++){
                    element[y].style.width=takenPercentage+"%";    
                }
            }
        }else if(this.winOrientation=='portrait'){
            className='p-width-';
            for(var x=1;x<=division;x++){
                element=document.getElementsByClassName(className+x);
                length=element.length;
                takenPercentage=defaultPercentage/12*x;
                
                // if the class p-width-n has more than one member
                for(var y=0;y<length;y++){
                    element[y].style.width=takenPercentage+"%";    
                }
            }
        }
    
    }

    height_class_set(){
        // o-height-n
        // for height pixel will be used as default
        var division=12;
        var element;
        var docs;
        var length;
        var takenSize;

        if(this.winOrientation=='landscape'){
            element='l-height-';
            for(var x=1;x<=division;x++){
                docs=document.getElementsByClassName(element+x);
                length=docs.length;
                takenSize=this.winHeight/division*x;

                // if the class l-height-x has more than one member
                for(var y=0;y<length;y++){
                    docs[y].style.height=takenSize+"px";
                }
            }
        }else if(this.winOrientation=='portrait'){
            element='p-height-';
            for(var x=1;x<=division;x++){
                docs=document.getElementsByClassName(element+x);
                length=docs.length;
                takenSize=this.winHeight/division*x;
                
                // if the class p-height-x has more than one member
                for(var y=0;y<length;y++){
                    docs[y].style.height=takenSize+"px";
                }
            }
        }

    }

    padding_class_set(){
        var maxPercentage=100;
        var element;
        var docs;
        var length;

        if(this.winOrientation=='landscape'){
            element='l-padding-';

            for(var x=1;x<=maxPercentage;x++){
                docs=document.getElementsByClassName(element+x);
                length=docs.length;

                // if the class l-padding-x has more than one member
                for(var y=0;y<length;y++){
                    docs[y].style.padding=x+"%";
                }
            }
        }else if(this.winOrientation=='portrait'){
            element='p-padding-';

            for(var x=1;x<=maxPercentage;x++){
                docs=document.getElementsByClassName(element+x);
                length=docs.length;

                // if the class l-padding-x has more than one member
                for(var y=0;y<length;y++){
                    docs[y].style.padding=x+"%";
                }
            }
        }

    }

    
}

function canvas_create(){
    var doc=document.getElementById('more-information');
    var docHeight=doc.offsetHeight;
    var docWidth=doc.offsetWidth;
    doc.width=docWidth;
    doc.height=docHeight;
    var ctx=doc.getContext('2d');
    var winWidth=screen.width;
    var winHeight=screen.height;
    ctx.strokeStyle='blue';
    ctx.lineWidth=3;

    if(winWidth>winHeight){
        
        ctx.beginPath();
        ctx.moveTo(docWidth/2, 0);
        ctx.lineTo(docWidth/2, docHeight/2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(docWidth/2, docHeight/2);
        ctx.lineTo(docWidth-85, docHeight/2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(docWidth-85, docHeight/2);
        ctx.lineTo(docWidth-150, docHeight/2-40);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(docWidth-85, docHeight/2);
        ctx.lineTo(docWidth-150, docHeight/2+40);
        ctx.stroke();
    }
    
}
function create_pointer(){
    var docs=document.getElementsByClassName('pointer');
    var winWidth=screen.width;
    var winHeight=screen.height;
    var length=docs.length;
    var attrTarget;
    if(winWidth > winHeight){
        for(var x=0;x<length;x++){
            let ndocs=docs[x];
            ndocs.onclick=function(){
                attrTarget=ndocs.getAttribute('target');
                let targetDoc=document.getElementById(attrTarget);
                let boundingRect=targetDoc.getBoundingClientRect();
                let y=boundingRect.top;
                window.scrollTo(0, y);
            }
        }
    }else if(winWidth<winHeight){
        for(var x=0;x<length;x++){
            let ndocs=docs[x];
            ndocs.onclick=function(){
                attrTarget=ndocs.getAttribute('target');
                let targetDoc=document.getElementById(attrTarget);
                let boundingRect=targetDoc.getBoundingClientRect();
                let y=boundingRect.top;
                document.getElementById('main-nav-container').style.display='none';
                window.scrollTo(0, y);
            }
        }
    }
}
function create_event_on_portrait(){
    var winWidth=screen.width;
    var winHeight=screen.height;
    
    if(winWidth<winHeight){
        var target=document.getElementById('main-nav-container');
        var doc=document.getElementById('nav-opener-portrait');
        doc.onclick=function(){
            target.style.display='initial';
        }
        var close=document.getElementById('button-close-nav-portrait');
        close.onclick=function(){
            target.style.display='none';
        }    
    }
}
function create_re_link(){
    var docs=document.getElementsByClassName('re-link');
    var length=docs.length;
    for(var x=0;x<length;x++){
        let pointer;
        pointer=docs[x];
        pointer.onclick=function(){
            // re-link is like a href
            let re_link=pointer.getAttribute('re-link');
            // if the re-link is null move it to maintenance page as default until the link is fixed
            if(re_link==null){
                location.href='maintenance.html';
            }else{
                location.href=re_link;
            }
        }
    }
}
function create_typing_animation(){
    var target=document.getElementById("typing-animation-text");
    var text=target.getAttribute('content');
    var textUpperCase=text.toUpperCase();
    var textLength=textUpperCase.length;
    target.innerHTML="-";
    var x=0;
    window.setInterval(function(){
        if(x!=textLength){
            target.innerHTML+=textUpperCase[x];
            x+=1;
        }else{
            target.innerHTML='-';
            x=0;
        }
    },300);    
               
    

}
function create_animation(){
    create_typing_animation();
    
}
window.onload=function(){
    var css=new css_features();
    css.width_class_set();
    css.height_class_set();
    css.padding_class_set();

    canvas_create();

    create_pointer();

    create_event_on_portrait();

    create_re_link();

    create_animation();
}