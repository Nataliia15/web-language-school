
    const template=document.createElement('template');
    template.innerHTML= `
    <div>
    <img src="img/close.png" id="close">
    <p id="message"></p>
    </div>
    <style>

    div{
    display:flex;
    flex-direction:column;
    align-items:end;
    justify-content: center;
    background-color:lightcyan;
    width:200px;
    height:80px;
    border-radius:30px;
    padding: 12px;
    box-shadow: 0 0 10px -5px  ;
    background-color:white;
    z-index:2000;
    position: absolute;
    top: 20%; 
    left: 50%;
    transform: translate(-50%,0);


    }
    #close{
    align-self:end;
    height:15px;
    width:15px;
    }
    p{
    text-align:center;
    }
    



    

    `

    class Popup extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            let clone=template.content.cloneNode(true);
            this.shadowRoot.append(clone);
            this.overlay=null;
            
            //shadowRoot.append(clone);
            
            
        }
    connectedCallback(){
        const close_btn=this.shadowRoot.querySelector('#close');
        close_btn.addEventListener('click',()=>this.close());
    }

    
    show(message,status){
        
        const messageEl=this.shadowRoot.querySelector('#message');
        messageEl.textContent=message;
        if(status==200){
            messageEl.style.color='green';

        }else if (status==500) {
            messageEl.style.color='red'
            
        } else if(status==409){
            messageEl.style.color='orange'
        }
        this.overlay=document.createElement('div');
        this.overlay.id='overlay';
        document.body.appendChild(this.overlay);
        document.body.appendChild(this);
    }
    close(){
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        this.remove();

    }


    }
    //his.shadowRoot.innerHTML= `*/

    customElements.define('pop-up',Popup);
    const style = document.createElement('style');
style.textContent = `
    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); /* semi-transparent black */
        z-index: 10; /* Sit behind the popup */
    }
`;
document.head.appendChild(style);