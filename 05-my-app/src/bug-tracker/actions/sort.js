function sort(attrName, isDesc){
    const action = { type : 'SORT_BUGS', payload : {sortAttr : attrName, isDesc} };
    return action;
}

export default sort;