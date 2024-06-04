import { Divider, List, Typography } from 'antd';
const data = [
    'List 1.',
    'Dokument 1.',
    'Prezentacia.',
    'Kniga 1.',
];
const dod = [
    'Matn muxarriri.',
    'Grafik muxarrir.',
    'Ma’lumotlar ombori.',
    'Elektron jadval muxarriri.',
];
const mog = [
    'F1.',
    'F2.',
    'F5.',
    'F8.',
];
const dog = [
    'List 1.',
    'Dokument 1.',
    'Prezentacia.',
    'Kniga 1.',
];
const odd = [
    'Backspace.',
    'Delete.',
    'F8.',
    'Insert.',
];
function Savollar() {
    return (
        <>
            <Divider orientation="left">Sovol</Divider>
            <List
                header={<div>Microsoft Word dasturida yangi hujjat yaratilganda, odatda avtomatik ravishda dastur tomonidan unga qanday nom beriladi?</div>}
                footer={<div>Davom Etish</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[A]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <List
                header={<div>Microsoft Word – bu:</div>}
                footer={<div>Davom Etish</div>}
                bordered
                dataSource={dod}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[Javob]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <List
                header={<div>Microsoft Word dasturi ma’lumotnomasini chaqirish qaysi tugma orqali amalga oshiriladi?</div>}
                footer={<div>Davom Etish</div>}
                bordered
                dataSource={mog}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[Javob]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <List
                header={<div>Microsoft Word dasturi yordamida yaratiladigan hujjatlar qanday nomlanadi?</div>}
                footer={<div>Davom Etish</div>}
                bordered
                dataSource={odd}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[Javob]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <List
                header={<div>Microsoft Word dasturida kursordan o‘ngdagi belgilarni o‘chirish uchun qaysi tugmadan foydalaniladi</div>}
                footer={<div>Davom Etish</div>}
                bordered
                dataSource={dog}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[Javob]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </>
    )
}

export default Savollar