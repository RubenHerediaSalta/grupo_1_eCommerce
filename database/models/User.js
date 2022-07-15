module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; //   
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(500),            
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(500),            
            allowNull: true
        }
    };
    let config = {
        tableName: 'Users',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias,cols,config);

    return User
};