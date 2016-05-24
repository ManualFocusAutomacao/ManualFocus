DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [4],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<NOVA PALAVRA-CHAVE>","Produto","Marca","Departamento","Fornecedor"],
	DREX_KEYWORD_CHILD_START: [1,5,5,5,5],
	DREX_KEYWORD_CHILD_END: [5,5,5,5,5]
	
};