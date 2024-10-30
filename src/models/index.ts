import User from "./UserModel";
import Client from "./ClientModel";
import Loan from "./LoanModel";
import Fee from "./FeeModel";


User.hasMany(Client, { foreignKey: 'user_id'});
Client.belongsTo(User, { foreignKey: 'user_id'});

User.hasMany(Loan, {foreignKey: 'user_id'});
Loan.belongsTo(User, {foreignKey: 'user_id'});

Client.hasMany(Loan, {foreignKey: 'client_id'});
Loan.belongsTo(Client, {foreignKey: 'client_id'});

Loan.hasMany(Fee, {foreignKey: 'loan_id'});
Fee.belongsTo(Loan, {foreignKey: 'loan_id'});

export { User, Client, Loan, Fee };