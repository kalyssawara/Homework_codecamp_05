let sum = 0;
for (let i = 0; i<=420; i++) {
    if (i % 2 == 0) {
    sum = sum +i;
    }
}

// 24-02-2020

const obj = {
    name: 'Kalyssa',
        age: 33,
        height: 171,
        weight: 47
    };
    const clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    };
    
    clone.name = "Kaly";
    console.log(obj.name);
    console.log(clone.name);
    
    //4.18.1
    let obj = {};
        obj.name = 'Sonter';
        console.log(obj);
        obj.surname = 'Pakorn';
        console.log(obj);
        obj.name = 'Boy';
    console.log(obj);
    
    delete obj.name;
    console.log(obj);
    
    // 4.18.2
    function isEmpty(obj) {
        let isEmpty = true;
        for(let key in obj) {
            isEmpty = false;
        }
        return isEmpty;
    }
    let obj = {}
    console.log(isEmpty(obj));
    
    // // 4.18.3
    function sum(obj) {
        let total = 0;
        for (let key in obj) {
            total += obj[key];
        }
        return total;
    }
    
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    
    console.log(sum(salaries));
    
    // 4.18.5
    function multiplyNumberic(obj, times) {
        for (let key in obj) {
            if (typeof (obj[key]) == "number") {
                obj[key] *= times;
            }
        }
        return obj;
    }
    
    let dreamTeam = {
        oat: 15800,
        kong: 150000,
        sonter: 7000000,
        moew: 200000,
        name: 'Nat'
    }
    
    console.log(multiplyNumberic(dreamTeam, 2));
    
    
    
