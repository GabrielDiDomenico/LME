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
  var tag_atual=""; //variavel para salvar a tag atual
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i].nodeName;
      console.log("entrou0");
      if(tag_atual=="topic"){
        if(xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].nodeName=="topicRef"){
          attr_atual = xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].attributes[0].value;
          if(attr_atual=="#Filme"){
            console.log("entrou2");
            arvoreTxt = arvoreTxt + identacao + "<a href='filmes.html'>" + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + "</a>" 
          }
        }
      }
    }
    //arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[0].childNodes[1129].nodeName + ": ";

   

  }
    
    return arvoreTxt;
}

xml = xmlLoader("xml.xml"); //carrega o xml
document.write(xmlArvore(xml,"<br>")); //printa a árvore na tela