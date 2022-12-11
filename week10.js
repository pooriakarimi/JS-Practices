const salary = 6000 //$

const dayPay = 55 //$

const goal = 66000 //$

const monthlyPay = dayPay * 30;
console.log('Month Expenses:\t ' + monthlyPay + '$' );

const savings = salary - monthlyPay //$
console.log('Saving per month: \t' + savings + '$');

const timeNeeded = goal / savings
console.log('Time needed to reach to your goal:\t' + Math.ceil(timeNeeded) + '\tmonth');