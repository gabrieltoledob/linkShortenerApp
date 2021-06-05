import AsyncStorage from '@react-native-async-storage/async-storage';

// BUSCAR OS LINKS SALVOS //
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];
    return linkSaves;
}

// SALVAR UM LINK NO STORAGE //
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //IGNORAR NA LISTAGEM LINKS IGUAIS OU COM MESMO ID
    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link já se encontra na lista');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

// DELETAR ALGUM LINK ESPECIFICO //
export async function deleteLink(links, id){
    let myLinks = links.filter( (item) =>{
        return (item.id !== id)
    })  

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));
    return myLinks;
}