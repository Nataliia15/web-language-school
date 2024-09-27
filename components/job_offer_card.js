
const template=document.createElement('template');
template.innerHTML= `
<style>
:host{
}
div{
display:flex;
flex-direction:column;
align-items:start;
justify-content: center;
background-color:lightcyan;
width:200px;
height:80px;
border-radius:30px;
padding: 12%;
box-shadow: 0 0 10px -5px  ;


}
div:hover{
//width:16vw;
gap:1px;
//height:90px;
transform:scale(1.075);
transition:0.3s ease-in;
}




p{
color:rgb(3, 74, 97);
    font-weight: lighter;
    font-size: large;
    margin:0;
}
a{
color:rgb(37, 14, 167);
font-weight:bold;
font-size: large;
margin:0;
margin-top:10px;
self-justify: flex-end;
cursor:pointer;
text-decoration:none;
}
a:hover{
color:rgb(62, 32, 236);
}
::slotted(h5){
//color:rgb(3, 74, 97);
color: rgb(17, 83, 104);
font-size:x-large;
fint-weight:bold;
}

</style>
<div>
<slot name="title"></slot>
<p>(m/w/d)</p>
<a href="#" id="link">Jobangebot ansehen >></a> 

</div>
`

class JobOffer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let clone=template.content.cloneNode(true);
        this.shadowRoot.append(clone);
        
        //shadowRoot.append(clone);
        
        
    }
connectedCallback(){
    const link=this.getAttribute("link-attr")|| "#";
    this.shadowRoot.querySelector("#link").setAttribute('href',link);


}

}
//his.shadowRoot.innerHTML= `*/






customElements.define('job-offer-card',JobOffer);