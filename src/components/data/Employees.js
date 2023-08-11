const employeesData = [
    {
        key: "1",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "1",
        name: "Nguyễn Văn Aaaaaaaaaaaaaaaaaaaaaaaaaaa",
        department: { name: "Finance", color: '#5733FF' },
        phone: "0123456789",
        gender: "Nam",
        email: "nguyenvana@gmail.com",
        bank: "Vietcombank",
        birthdate: "01/01/1990",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        country: "Việt Nam",
        account: "1234567890",
        active: true
    },
    {
        key: "2",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "2",
        name: "Trần Thị B",
        department: { name: "Human Resource", color: '#FF3357' },
        phone: "0987654321",
        gender: "Nữ",
        email: "tranb@gmail.com",
        bank: "Techcombank",
        birthdate: "02/02/1991",
        address: "456 Đường XYZ, Quận 2, TP.HCM",
        country: "Việt Nam",
        account: "0987654321",
        active: false
    },
    {
        key: "3",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "3",
        name: "Lê Văn C",
        department: { name: "Sales", color: '#FF5733' },
        phone: "0123456789",
        gender: "Nam",
        email: "levanc@gmail.com",
        bank: "Sacombank",
        birthdate: "03/03/1992",
        address: "789 Đường DEF, Quận 3, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: true
    },
    {
        key: "4",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "4",
        name: "Nguyễn Thị A",
        department: { name: "Marketing", color: '#33FF57' },
        phone: "0123456789",
        gender: "Nữ",
        email: "nguyenthia@gmail.com",
        bank: "Vietcombank",
        birthdate: "01/01/1990",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: true
    },
    {
        key: "5",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "5",
        name: "Trần Văn B",
        department: { name: "Finance", color: '#5733FF' },
        phone: "0123456789",
        gender: "Nam",
        email: "tranvanb@gmail.com",
        bank: "Techcombank",
        birthdate: "02/02/1991",
        address: "456 Đường XYZ, Quận 2, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: false
    },
    {
        key: "6",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "6",
        name: "Phạm Thị C",
        department: { name: "Human Resource", color: '#FF3357' },
        phone: "0123456789",
        gender: "Nữ",
        email: "phamthic@gmail.com",
        bank: "Vietinbank",
        birthdate: "03/03/1992",
        address: "789 Đường DEF, Quận 3, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: false
    },
    {
        key: "7",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "7",
        name: "Lê Thị D",
        department: { name: "Operations", color: '#57FF33' },
        phone: "0123456789",
        gender: "Nữ",
        email: "lethid@gmail.com",
        bank: "BIDV",
        birthdate: "04/04/1993",
        address: "123 Đường GHI, Quận 4, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: true
    },
    {
        key: "8",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "8",
        name: "Nguyễn Văn E",
        department: { name: "Engineering", color: '#3357FF' },
        phone: "0123456789",
        gender: "Nam",
        email: "nguyenvane@gmail.com",
        bank: "Agribank",
        birthdate: "05/05/1994",
        address: "456 Đường JKL, Quận 5, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: false
    },
    {
        key: "9",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        id: "9",
        name: "Trần Thị F",
        department: { name: "Customer Support", color: '#FFA533' },
        phone: "0123456789",
        gender: "Nữ",
        email: "tranthisf@gmail.com",
        bank: "ACB Bank",
        birthdate: "06/06/1995",
        address: "789 Đường MNO, Quận 6, TP.HCM",
        country: "Việt Nam",
        account: "0123456789",
        active: false
    },
    {
        key: "10",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=maleg",
        id: "10",
        name: "Phạm Văn G",
        department: { name: "Research & Development", color: '#33A5FF' },
        phone: "0123456789",
        gender: "Nam",
        email: "phamvang@gmail.com",
        bank: "",
        birthdate: "",
        address: "",
        active: true
    },
    {
        key: "11",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=maleg",
        id: "11",
        name: "Lê Thị H",
        department: { name: "Quality Assurance", color: '#A533FF' },
        phone: "0123456789",
        gender: "Nữ",
        email: "lethih@gmail.com",
        bank: "",
        birthdate: "",
        address: "",
        active: true
    },
    {
        key: "12",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=maleg",
        id: "12",
        name: "Nguyễn Văn I",
        department: { name: "Design", color: '#33FFA5' },
        phone: "0123456789",
        gender: "Nam",
        email: "nguyenvani@gmail.com",
        bank: "",
        birthdate: "",
        address: "",
        active: true
    },
];

export default employeesData;
