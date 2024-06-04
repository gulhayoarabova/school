import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    name: 'Asilbek',
    age: 12,
    address: 'Uchtepa',
  },
  {
    key: '2',
    name: 'Abudilaziz',
    age: 11,
    address: 'Olmozor',
  },
  {
    key: '3',
    name: 'Firdavs',
    age: 15,
    address: 'Sergili',
  },
  {
    key: '4',
    name: 'Ibrohm',
    age: 13,
    address: 'Bunyotkor',
  },
  {
    key: '5',
    name: 'Jurat',
    age: 10,
    address: 'Farhot bozori',
  },
  {
    key: '6',
    name: 'Parviz',
    age: 7,
    address: 'Chilonzor',
  },
  {
    key: '7',
    name: 'Bexruz',
    age: 6,
    address: 'Yangi yol',
  },
  {
    key: '8',
    name: 'Muhammadali',
    age: 9,
    address: 'Chosh tepa',
  },
  {
    key: '9',
    name: 'Muhamandamin',
    age: 14,
    address: 'Mirza ulugbek',
  },
  {
    key: '10',
    name: 'Muhammadyusuf',
    age: 18,
    address: 'Novza',
  },
  {
    key: '11',
    name: 'Jorulox',
    age: 17,
    address: 'Pahtakor',
  },
  {
    key: '12',
    name: 'Yasmina',
    age: 16,
    address: 'Ynusobot',
  },
  {
    key: '13',
    name: 'Nazira',
    age: 15,
    address: 'Yaka saroy',
  },
  {
    key: '14',
    name: 'Diyora',
    age: 13,
    address: 'Tasq boyv',
  },
  {
    key: '15',
    name: 'Izora',
    age: 10,
    address: 'Shahon tohir',
  },
  {
    key: '16',
    name: 'Kishchan',
    age: 12,
    address: '',
  },
  {
    key: '17',
    name: 'Mubina',
    age: 7,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '18',
    name: 'Lolohon',
    age: 9,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '19',
    name: 'Nasiba',
    age: 18,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '20',
    name: 'Fatima',
    age: 16,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '21',
    name: 'Sunat',
    age: 11,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '22',
    name: 'Nurmuhammad',
    age: 12,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '23',
    name: 'Ogabek',
    age: 17,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '24',
    name: 'Muhammadsolih',
    age: 15,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '25',
    name: 'Davron',
    age: 13,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '26',
    name: 'Oybek',
    age: 14,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '27',
    name: 'Sabina',
    age: 10,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '28',
    name: 'Gulhayo',
    age: 8,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '29',
    name: 'Abdurashid',
    age: 8,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '30',
    name: 'Azamat',
    age: 18,
    address: 'London No. 2 Lake Park',
  },
];
const Filter = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default Filter;