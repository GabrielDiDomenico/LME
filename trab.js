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
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i].nodeName
      if(tag_atual=="topic"){
        topic_id_atual = xmlNode.childNodes[0].childNodes[i].attributes[0].value;
        if(xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].nodeName=="topicRef"){
          attr_atual = xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].attributes[0].value
          if(attr_atual=="#Filme"){
            link_filme="<a href='filmes.html?id="+ topic_id_atual +"'>"
            arvoreTxt = arvoreTxt + identacao + link_filme + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + "</a>" 
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