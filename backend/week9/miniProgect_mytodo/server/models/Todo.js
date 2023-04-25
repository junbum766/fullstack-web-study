const Todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        allowNull: false,
        type: DataTypes.INTEGER,
        default: 0,
      },
    }, // param2: 컬럼 정의
    {
      tableName: "todo", // 실제 db table명
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3: 모델 옵션 정의
  );

  return model;
};

module.exports = Todo;
