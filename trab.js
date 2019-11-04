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
    for(var i=0;i<xmlNode.childNodes.length;i++){//percorrendo os filhos do nó
        if(xmlNode.childNodes[i].nodeType == 1){//ignorar espaços em branco
            //pegando o nome do nó
            arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[i].nodeName + ": "
            if(xmlNode.childNodes[i].childNodes.length==0){
                //se não tiver filhos eu já pego o nodevalue
                arvoreTxt = arvoreTxt + xmlNode.childNodes[i].nodeValue 
                for(var z=0;z<xmlNode.childNodes[i].attributes.length;z++){
                    var atrib = xmlNode.childNodes[i].attributes[z];
                    arvoreTxt = arvoreTxt + " (" + atrib.nodeName + " = " + atrib.nodeValue + ")";
                }
                arvoreTxt = arvoreTxt + "<br />\n";
            }else if(xmlNode.childNodes[i].childNodes.length>0){
                //se tiver filhos eu tenho que pegar o valor pegando o valor do primeiro filho
                arvoreTxt = arvoreTxt + xmlNode.childNodes[i].firstChild.nodeValue;
                for(var z=0;z<xmlNode.childNodes[i].attributes.length;z++){
                    var atrib = xmlNode.childNodes[i].attributes[z];
                    arvoreTxt = arvoreTxt + " (" + atrib.nodeName + " = " + atrib.nodeValue + ")";
                }
                //recursividade para carregas os filhos dos filhos
                arvoreTxt = arvoreTxt + "<br />\n" + xmlMicoxArvore(xmlNode.childNodes[i],identacao + "> > ");
            }
        }
      }
      return arvoreTxt;
  }