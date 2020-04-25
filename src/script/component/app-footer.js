class AppFooter extends HTMLElement{
    connectedCallback() {
        this.render()
    } 
    render() {
        this.innerHTML= ` 
        <style>
            .social {
                display: inline-block;
                width: 50px;
                height: 50px;
                background-color: #333;
                margin-top: 50px;
                margin-left: 5px;
                margin-right: 5px;
                border-radius: 50%;
                line-height: 50px;
                font-size: 18px;
                box-shadow: 4px -4px 5px 0 rgba(0,0,0,0.3);
                transition: .3s;
                cursor:pointer;
                transform: translateY(2px);
                color: #000;
            }
            .social i {
                text-shadow: 0 0 rgba(0,0,0,0.3);
            }
            .social:hover {
                box-shadow:none;
                color:#20F4F5;
                border: .7px solid #20F4F5;
                transform: translateY(-6px);
            }
            hr {
                width: 75%;
                border: 1px solid #20F4F5;
                margin:auto;
                margin-bottom: 30px;
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .copy {
                color: #20F4F5;
                margin-bottom: 40px;
                font-weight: normal;
                position: absolute;
                top: 80%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            
        </style>
        <a href="https://www.instagram.com/aldycandra_/"><span class="social"><i class="fa fa-instagram"></i></span></a>
        <a href="https://www.linkedin.com/in/dimas-aldi-candra-saputra-37662b1a3/"><span class="social"><i class="fa fa-linkedin"></i></span></a>
        <a href="https://github.com/CandraJengger"><span class="social"><i class="fa fa-github"></i></span></a>
        <hr></hr>
        <h4 class="copy">Copyright &copy; Dimas Aldi Candra S.</h4>
        
        `
    }
}

customElements.define('app-footer',AppFooter)
