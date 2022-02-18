// 請寫3段程式碼(語言不拘)回覆下列3個問題，並將程式碼上傳到github後分享鏈接給我們。

// 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。

fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3 

function fibonacci(position) {
    if (position <= 1) {
        return position
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

// 使用 Linked List 實作 Stack ，實作需包含以下方法。
//  push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 

// 新節點
class StackNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        // 最後一個
        this.top = null;
        this.length = 0;
    }

    // 新增Stack元素
    push(value) {
        // 建立新節點
        let node = new StackNode(value);
        // 將新節點的下一個設為原本的top
        node.next = this.top;
        // 將top設為新增的節點
        this.top = node;
        this.length++;
    }

    // 刪除Stack元素
    pop() {
        // 將刪除的節點存起來
        let result = this.top;
        // 最後一個改為它的前一個
        this.top = this.top.next;
        this.length--;
        return result.data;
    }

    // Stack長度
    size() {
        return this.length;
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
// stack.pop() // 3 
// stack.size() // 2 

console.log(stack.pop());
console.log(stack.size());


// 將下列輸入資料整合成期望的輸出結果。
// 輸入資料:
const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [{
        userId: 'U01',
        orderIds: ['T01', 'T02']
    },
    {
        userId: 'U02',
        orderIds: []
    },
    {
        userId: 'U03',
        orderIds: ['T03']
    },
]
const userData = {
    'U01': 'Tom',
    'U02': 'Sam',
    'U03': 'John'
}
const orderData = {
    'T01': {
        name: 'A',
        price: 499
    },
    'T02': {
        name: 'B',
        price: 599
    },
    'T03': {
        name: 'C',
        price: 699
    },
    'T04': {
        name: 'D',
        price: 799
    }
}
// 輸出結果:
const result = [{
    user: {
        id: 'U01',
        name: 'Tom'
    },
    orders: [{
            id: 'T01',
            name: 'A',
            price: 499
        },
        {
            id: 'T02',
            name: 'B',
            price: 599
        },
    ],
}, ]

function getData() {
    let res = [];
    for (const userId in userData) {
        let data = {
            user: {},
            orders: []
        };

        // 存入user資料
        data.user.id = userId;
        data.user.name = userData[userId];

        // 將該userId傳入獲取該user的order資料
        data.orders = getUserOrders(userId);

        res.push(data);
    }
    return res
}

// 獲取個別user的所有order資料
function getUserOrders(userId) {
    let UserOrders = [];
    let orderIds = [];

    // 獲取該user的所有order (orderIds)
    for (const data of userOrders) {
        if (data.userId === userId) {
            orderIds = data.orderIds;
        }
    }

    // 獲取該user的orderIds中有的order資料
    for (const orderId in orderData) {
        let order = {};

        if (orderIds.indexOf(orderId) !== -1) {
            order.id = orderId;
            order.name = orderData[orderId].name;
            order.price = orderData[orderId].price;
            UserOrders.push(order);
        }
    }
    return UserOrders;
}

console.log(getData());