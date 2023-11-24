function mergeTest(collection_1: int[], collection_2: int[], expResult: int[]){
    result: int[] = merge(collection_1, collection_2);
    if(result == expResult){
        console.log(true);
    } else {
        console.log(false);
    }
}

test1_1: int[] = [1, 3, 5];
test1_2: int[] = [2, 4, 6];
expResult1: int[] = [1, 2, 3, 4, 5, 6];
mergeTest(test1_1, test1_2, expResult1);

test2_1: int[] = [1, 2, 3];
test2_2: int[] = [3, 4, 5];
expResult2: int[] = [1, 2, 3, 4, 5];
mergeTest(test2_1, test2_2, expResult2);

test3_1: int[] = [1, 2, 3];
test3_2: int[] = [];
expResult3: int[] = [1, 2, 3];
mergeTest(test3_1, test3_2, expResult3);

test4_1: int[] = [];
test4_2: int[] = [];
expResult4: int[] = [];
mergeTest(test4_1, test4_2, expResult4);