let searchRecipeInput = document.getElementById('searchRecipeInput');
let foundProductsTags = document.getElementById('foundProductsTags');



/* ******************************************************* */
/* ***************** SEARCH RECIPE INPUT ***************** */
/* ******************************************************* */
searchRecipeInput.addEventListener('keypress', function(event) {
    
    if (event.key === 'Enter') {
      event.preventDefault();

     let tag = createComponentTag(searchRecipeInput.value);
     foundProductsTags.append(tag);

     searchRecipeInput.value = '';
    }
  });

/* ******************************************************* */
/* **************** CREATE COMPONENT TAG ***************** */
/* ******************************************************* */
function createComponentTag(value){
    let tag = createNewElement('button', 'found-product-tag');
    tag.type = 'button';

    let valueName = createNewElement('span', '', value);
    tag.append(valueName);

    let icon = createNewElement('span', 'icon-tick-circle tag-notif-icon');
    tag.append(icon);

    return tag;
}


let componentNameOptions = [...new Set(apiResult.flatMap(item => item.menu.map(comp => comp.component_name)))].map(name => ({
    value: name, 
    text: name
}));


new TomSelect('#searchRecipeInput', {
    maxItems: 10,
	options: componentNameOptions,
    plugins: {
		remove_button:{
			title:'Remove this item',
		}
	}
});