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
  var i=0;//var que ira somar até encontrar o tópico certo
  var nao_achou = true;//var pra controlar o while
  var arvoreTxt=""; //esta var armazenara o conteudo
  var topic_id_sem_hash=""; 
  topic_id_sem_hash = location.search.slice(4);//var que armazena conteúdo do GET
  var topic_id_com_hash="#"; 
  topic_id_com_hash += location.search.slice(4);//var que armazena conteúdo do GET com uma hashtag
  var tag_atual=""; //variavel para salvar a tag atual
  var encontrou_pela_id=false; //variavel que ira informar se encontrou na busca ou não
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    while(nao_achou){
      if(xmlNode.childNodes[0].childNodes[i].nodeName == "topic" &&
        xmlNode.childNodes[0].childNodes[i].attributes[0].value == topic_id_sem_hash){
          //Path para pegar o titulo em ingles
          arvoreTxt = arvoreTxt + "Titulo Inglês: " + xmlNode.childNodes[0].childNodes[i].childNodes[5].childNodes[3].textContent + identacao + identacao;
          //Path para pegar a distribuidora
          arvoreTxt = arvoreTxt + "Distribuição: " + xmlNode.childNodes[0].childNodes[i].childNodes[7].childNodes[3].textContent + identacao + identacao;
          //Path para pegar a sinopse
          arvoreTxt = arvoreTxt + "Sinopse: " + xmlNode.childNodes[0].childNodes[i].childNodes[9].childNodes[3].textContent + identacao + identacao;
          //Bloco de código para pegar a direção
          arvoreTxt = arvoreTxt + "Direção: " 
          for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
            if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
              if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-direcao" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                encontrou_pela_id=true;
                for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                  if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                    if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                      xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                        arvoreTxt = arvoreTxt + xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + ", "
                    }
                  }
                }
              }
            }
          }
          if(encontrou_pela_id==false){
            arvoreTxt = arvoreTxt + "Seção não encontrada :("
          }
          arvoreTxt = arvoreTxt + identacao + identacao
          encontrou_pela_id=false;
          //Bloco de código para pegar o elenco
          arvoreTxt = arvoreTxt + "Elenco: " 
          for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
            if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
              if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-elenco" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                encontrou_pela_id=true;
                for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                  if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                    if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                      xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                        arvoreTxt = arvoreTxt + xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + ", "
                    }
                  }
                }
              }
            }
          }
          if(encontrou_pela_id==false){
            arvoreTxt = arvoreTxt + "Seção não encontrada :("
          }
          arvoreTxt = arvoreTxt + identacao + identacao
          encontrou_pela_id=false;
          //Bloco de código para pegar o elenco apoio
          var j=11;//Var para indicar o caminho, começa no 11 pois é o inicial padrão para começar a mostrar o elenco apoio
          arvoreTxt = arvoreTxt + "Elenco Apoio: "
          while(xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[1].childNodes[1].attributes[0].value=="#elencoApoio"){
            arvoreTxt = arvoreTxt + xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].textContent + ", ";
            j+=2;
          }
          arvoreTxt = arvoreTxt + identacao + identacao;
          
          //Bloco de código para pegar o ano
          arvoreTxt = arvoreTxt + "Ano: " 
          for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
            if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
              if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-ano" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                encontrou_pela_id=true;
                for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                  if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                    if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                      xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                        arvoreTxt = arvoreTxt + xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + ", "
                    }
                  }
                }
              }
            }
          }
          if(encontrou_pela_id==false){
            arvoreTxt = arvoreTxt + "Seção não encontrada :("
          }
          arvoreTxt = arvoreTxt + identacao + identacao
          encontrou_pela_id=false;
          //Bloco de código para pegar o genero
          arvoreTxt = arvoreTxt + "Genero: "
          for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
            if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
              if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-genero" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                encontrou_pela_id=true;
                for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                  if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                    if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                      xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                        arvoreTxt = arvoreTxt + xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + ", "
                    }
                  }
                }
              }
            }
          }
          if(encontrou_pela_id==false){
            arvoreTxt = arvoreTxt + "Seção não encontrada :("
          }
          arvoreTxt = arvoreTxt + identacao + identacao
          encontrou_pela_id=false;
          //Path para pegar o site

          arvoreTxt = arvoreTxt + "Site: <a href='" + xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].attributes[0].value+ "' target='_blank'>"+ xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].attributes[0].value + "</a>"+ identacao + identacao;
          nao_achou=false;
        
      }
      i++;
    }
    
    //arvoreTxt = arvoreTxt + identacao + xmlNode.childNodes[0].childNodes[1129].nodeName + ": ";


  }
    
    return arvoreTxt;
}

xml = xmlLoader("xml.xml"); //carrega o xml
document.write(xmlArvore(xml,"<br>")); //printa a árvore na tela