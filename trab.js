console.log("oi");

//Para carregar o arquivo XML em todos os navegadores

function xmlLoader(url){
      if(window.XMLHttpRequest){
          var Loader = new XMLHttpRequest();
          Loader.open("GET", url ,false);
          Loader.send(null);
          return Loader.responseXML;
      }else if(window.ActiveXObject){
          var Loader = new ActiveXObject("Msxml2.DOMDocument.3.0");
          Loader.async = false;
          Loader.load(url);
          return Loader;
      }
  }

  //Função para trabalhar com o arqv XML

  function xmlArvore(xmlNode,identacao){
    var arvoreTxt=""; //esta var armazenara o conteudo
    if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
        arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[0].nodeName + ": "
  
    }
      
      return arvoreTxt;
  }

xml = xmlLoader("xml.xml"); //carrega o xml
document.write(xmlArvore(xml,"")); //printa a árvore na tela