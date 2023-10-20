import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { Button, Chip, FileButton, Group, Select, Switch, TextInput } from '@mantine/core';
import titlejson from '../data/title.json';
import datas from '../data/datas.json';
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getDateInclude, getForValue, getSameCheck, getTableContent, getTemplate, getValues } from '../redux/inputValueSlice';
import Preview from '../components/Preview';
import instituteLogo from '../assets/Leading_University_Logo.png';

const Formtext = () => {
    const { name } = useParams();
    const [content, setContent] = useState([1]);
    const [dateValue, setDate] = useState(new Date());
    const formatedDate = dayjs(dateValue).format("D MMM YYYY");
    const dispatch = useDispatch();
    const inputData = useSelector(state => state.input.data);
    const [file, setFile] = useState(null);
    const resetRef = useRef(null);
    
    const subchecked = useSelector(state => state.input.dateInclude);
    const forValue = useSelector(state => state.input.forValue);
    const sameCheck = useSelector(state => state.input.sameCheck);
    
    const handleDateInclude = (v) => {
        dispatch(getDateInclude(v))
    }
    const handleForValue = (v) => {
        dispatch(getForValue(v))
    }

    const clearFile = () => {
        setFile(null);
        resetRef.current?.();
    };

    const handleAddContent = () => {
        setContent((prev) => [...prev, prev[prev.length - 1] + 1]);
    };
    const handleRemoveContent = () => {
        const newArr = content.length > 1 ? content.slice(0, [content.length - 1]) : content;
        setContent(newArr);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let change = {};
        if (name) {
            change = {
                ...inputData,
                [name]: value
            };
        }
        dispatch(getValues(change));
    };

    useEffect(() => {
        
        if (subchecked && !file) {
            dispatch(getValues({ ...inputData, 'inputDate': formatedDate,photo:instituteLogo}))
        } else {
            dispatch(getValues({ ...inputData, photo: file }))
        }
        

    }, [formatedDate, file]);

    useEffect(() => {
        dispatch(getTableContent(content))
    }, [content])

   
    const handaleDate = (v) => {
        setDate(v);
    };
    const handleFile = (value) => {
        const v = URL.createObjectURL(value);
        setFile(v);
    };

    const handleSameChange = (v) => {
        dispatch(getSameCheck(v.currentTarget.checked))
    }

    return (
        <div className='container relative h-full'>

            <Navbar />



            <div className='grid xl:grid-cols-2 gap-5 w-full items-start xl:justify-between absolute top-32'>
                <div className="formtext bg-white w-full p-3 rounded-md mb-12">
                    <p className='text-center font-bold'>{name.toUpperCase()} FRONT PAGE</p>

                    <div className="formBox mt-6">
                        <form >

                            <div className='mb-11 text-center flex flex-col items-center gap-6'>
                                <div>
                                    <div size="sm" ta="center" mt="sm" className='w-[10rem] h-[10rem] border overflow-hidden'>
                                        <img src={file ? file : instituteLogo} className='w-full h-full object-contain' alt="logoimg" />
                                    </div>
                                    
                                </div>

                                <Group justify="center">
                                    <FileButton resetRef={resetRef} onChange={(value) => handleFile(value)} accept="image/png,image/jpeg">
                                        {(props) => <Button className='bg-black text-white' variant='light' {...props}>Change Logo</Button>}
                                    </FileButton>
                                    <Button variant='light' className='bg-black text-white' disabled={!file} color="red" onClick={clearFile}>
                                        Reset
                                    </Button>
                                </Group>
                            </div>


                            <div className="deptNameAndTopic md:flex items-center justify-between sm:gap-2">
                                <TextInput
                                    onChange={(e) => handleChange(e)}
                                    required
                                    label="Department"
                                    placeholder="Enter your department name"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='deptName'
                                    list='deptName'


                                />
                                <datalist id='deptName'>

                                    {datas.department.map((data, i) => (
                                        <option key={i} value={data}></option>
                                    ))}
                                </datalist>

                                <TextInput
                                    onChange={handleChange}
                                    required
                                    label="Course title"
                                    placeholder="Enter Course title"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='courseTitle'
                                    list='courseTitle'

                                />
                                <datalist id='courseTitle'>

                                    {titlejson.map((titleData, index) => (
                                        <option key={index} value={titleData.title}>{titleData.code}</option>
                                    ))}
                                </datalist>
                                <TextInput
                                    onChange={handleChange}
                                    required
                                    label="Course Code"
                                    placeholder="Enter Course code"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='courseCode'
                                    list='courseCode'

                                />
                                <datalist id='courseCode'>
                                    {titlejson.map((titleData, index) => (
                                        <option key={index} value={titleData.code}>{titleData.title}</option>
                                    ))}
                                </datalist>



                            </div>

                            <Chip.Group multiple={false} value={forValue} onChange={(v) => handleForValue(v)}>
                                <Group justify="start" className='mt-6' >
                                    <Chip variant='filled' value="for Assignment">for Assignment</Chip>
                                    <Chip value="for Lab">for Lab</Chip>
                                </Group>
                            </Chip.Group>

                            <TextInput
                                onChange={handleChange}
                                required
                                label={`${forValue == 'for Assignment' ? 'Assignment' : 'Lab'} Topic`}
                                placeholder={`Enter ${forValue == 'for Assignment' ? 'Assignment' : 'Lab'} Topic`}
                                inputWrapperOrder={['label', 'error', 'input']}
                                className='mt-2'
                                name='topic'
                            />

                            <p className='text-xl text-center font-bold py-4'>Teacher's Information</p>


                            <div className='md:flex gap-2'>
                                <TextInput
                                    onChange={handleChange}
                                    required
                                    label="Name"
                                    placeholder="Enter Teacher's name"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='teacherName'
                                    list='teacherName'

                                />
                                <datalist id='teacherName'>
                                    {datas.teachersName.map((name, i) => (
                                        <option key={i} value={name}></option>
                                    ))}

                                </datalist>


                                <TextInput
                                    onChange={handleChange}
                                    required
                                    label="Designation"
                                    placeholder="Enter Teacher's Designation"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='teacherDesignation'
                                    list='teacherDesignation'
                                />

                                <datalist id='teacherDesignation'>
                                    {datas.designation.map((data, i) => (
                                        <option key={i} value={data}></option>
                                    ))}
                                </datalist>

                                <TextInput
                                    onChange={handleChange}
                                    required
                                    label="Faculty"
                                    placeholder="Enter Faculty Name"
                                    inputWrapperOrder={['label', 'error', 'input']}
                                    className='flex-1'
                                    name='facultyName'
                                    list='facultyName'
                                />
                                <datalist id='facultyName'>
                                    {datas.department.map((data, i) => (
                                        <option key={i} value={data}></option>
                                    ))}
                                </datalist>


                            </div>
                         
                            {name == 'group' ? <>
                                {content.map((data, i) => (
                                    <div key={i} >
                                        <div>
                                            <p className='text-xl text-center py-4 font-bold'>{data} Student's Information</p>
                                        </div>
                                        <div className='md:grid grid-cols-3 gap-2 items-center justify-center'>
                                            <TextInput
                                                onChange={handleChange}
                                                required
                                                label="Name"
                                                placeholder="Enter studnet's name"
                                                inputWrapperOrder={['label', 'error', 'input']}
                                                className='flex-1'
                                                name={`studentName${data}`}
                                                list={`studentName${data}`}
                                            />
                                            <TextInput
                                                onChange={handleChange}
                                                required
                                                label="Department"
                                                placeholder="Enter student's Deparment"
                                                inputWrapperOrder={['label', 'error', 'input']}
                                                className='flex-1'
                                                name={`studentDepartment${data}`}
                                                list={`studentDepartment${data}`}
                                            />
                                            <datalist id={`studentDepartment${data}`}>

                                                {datas.department.map((data, i) => (
                                                    <option key={i} value={data}></option>
                                                ))}
                                            </datalist>

                                            <TextInput
                                                onChange={handleChange}
                                                required
                                                label="Batch"
                                                placeholder="Enter student's batch"
                                                inputWrapperOrder={['label', 'error', 'input']}
                                                className='flex-1'
                                                name={`studentBatch${data}`}
                                                list={`studentBatch${data}`}
                                            />

                                            <TextInput
                                                onChange={handleChange}
                                                required
                                                label="Section"
                                                placeholder="Enter student's Section"
                                                inputWrapperOrder={['label', 'error', 'input']}
                                                className='flex-1'
                                                name={`studentSection${data}`}
                                                list={`studentSection${data}`}
                                            />
                                            <datalist id={`studentSection${data}`}>

                                                {datas.section.map((data, i) => (
                                                    <option key={i} value={data}></option>
                                                ))}
                                            </datalist>
                                            <TextInput
                                                onChange={handleChange}
                                                required
                                                label="id"
                                                placeholder="Enter student's ID"
                                                inputWrapperOrder={['label', 'error', 'input']}
                                                className='flex-1'
                                                name={`studentId${data}`}
                                                list={`studentId${data}`}

                                            />


                                        </div>
                                    </div>
                                ))}

                                <div className='text-center py-4 gap-3 flex items-center justify-center'>
                                    <Button onClick={handleAddContent} className='bg-black text-white' variant="light">+ Add Student</Button>
                                    <Button onClick={handleRemoveContent} className='bg-black text-white' variant="light">- Remove Student</Button>
                                    <Switch
                                        checked={sameCheck}
                                        onChange={(v) => handleSameChange(v)}
                                        className='py-4 font-bold'
                                        label="Batch, Dept. Same as 1st Member"
                                    />
                                </div>
                            </> :
                                <>
                                    <p className='text-xl text-center py-4 font-bold'>Student's Information</p>

                                    <div className='md:grid grid-cols-3 gap-2 items-center justify-center'>
                                        <TextInput
                                            onChange={handleChange}
                                            required
                                            label="Name"
                                            placeholder="Enter Teacher's name"
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            className='flex-1'
                                            name='studentName'
                                            list='studentName'
                                        />
                                        <TextInput
                                            onChange={handleChange}
                                            required
                                            label="Department"
                                            placeholder="Enter student's Deparment"
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            className='flex-1'
                                            name='studentDepartment'
                                            list='studentDepartment'
                                        />
                                        <datalist id='studentDepartment'>

                                            {datas.department.map((data, i) => (
                                                <option key={i} value={data}></option>
                                            ))}
                                        </datalist>

                                        <TextInput
                                            onChange={handleChange}
                                            required
                                            label="Batch"
                                            placeholder="Enter student's batch"
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            className='flex-1'
                                            name='studentBatch'
                                            list='studentBatch'
                                        />

                                        <TextInput
                                            onChange={handleChange}
                                            required
                                            label="Section"
                                            placeholder="Enter student's Section"
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            className='flex-1'
                                            name='studentSection'
                                            list='studentSection'
                                        />
                                        <datalist id='studentSection'>

                                            {datas.section.map((data, i) => (
                                                <option key={i} value={data}></option>
                                            ))}
                                        </datalist>
                                        <TextInput
                                            onChange={handleChange}
                                            required
                                            label="id"
                                            placeholder="Enter student's ID"
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            className='flex-1'
                                            name='studentId'
                                            list='studentId'

                                        />


                                    </div>
                                </>}


                            <div className='mt-3'>
                                <Chip variant='filled' checked={subchecked} onChange={(v) => handleDateInclude(v)} value={subchecked ? "Submission Date Included" : 'Submission date not included'}>{subchecked ? "Submission Date Included" : 'Submission date not included'}</Chip>
                                {subchecked ? <DateInput value={dateValue} onChange={(value) => handaleDate(value)} name='dateInpu' valueFormat="DD MMM YYYY" label="Submission Date" placeholder="Date input" /> : ''}
                            </div>

                        </form>
                    </div>

                </div>
                <div className="preview bg-white w-full p-3 rounded-md mb-12">
                    <div className='flex items-center justify-between'>
                        <p className='font-bold'>PREVIEW</p>
                        <Select
                            label={'Choose a Template'}
                            data={['template1', 'template2']}
                            defaultValue={'template1'}
                            onChange={(value) => dispatch(getTemplate(value))}
                            allowDeselect={false}
                        />
                    </div>
                    <Preview />
                </div>

            </div>

            
        </div>
    );
};

export default Formtext;