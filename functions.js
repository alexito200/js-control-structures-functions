function bankAccount() {
    let count = 0;
    let deposit = 50;
    let withdrawal = 25;

    function bankDeposit(depositAmount = deposit) {
        count += depositAmount;
        console.log(count);
    }
    function bankWithdrawal(withdrawalAmount = withdrawal) {
        count -= withdrawalAmount;
        console.log(count);
    }
    function balanceInquiry() {
        console.log(`Your balance is ${count}`);
    }
    return {
        deposit: bankDeposit,
        withdraw: bankWithdrawal,
        inquiry: balanceInquiry,
    };
}

const counter = bankAccount();
counter.deposit();
counter.deposit(200);
counter.withdraw();
counter.withdraw(10);
counter.inquiry();