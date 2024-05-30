import { Flat } from '@alptugidin/react-circular-progress-bar'
const RadialProgressber = () => {
    return (

        <>
            <h1 className='text-3xl md:text-5xl font-bold text-center py-10 mt-10'>Our servises progressber</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-10'>
                <div >
                    <h1 className='text-2xl md:text-3xl text-center font-bold py-5'>Our Recomended</h1>
                    <div className='w-48 mx-auto'>
                        <Flat
                            progress={81}
                            range={{ from: 0, to: 100 }}
                            sign={{ value: '%', position: 'end' }}
                            text={'Match'}
                            showMiniCircle={true}
                            showValue={true}
                            sx={{
                                strokeColor: '#16a34a',
                                barWidth: 8,
                                bgStrokeColor: '#ffffff',
                                bgColor: { value: '#000000', transparency: '20' },
                                shape: 'full',
                                strokeLinecap: 'round',
                                valueSize: 10,
                                valueWeight: 'bold',
                                valueColor: '#000000',
                                valueFamily: 'Trebuchet MS',
                                textSize: 13,
                                textWeight: 'bold',
                                textColor: '#000000',
                                textFamily: 'Trebuchet MS',
                                loadingTime: 1000,
                                miniCircleColor: '#ff0000',
                                miniCircleSize: 5,
                                valueAnimation: true,
                                intersectionEnabled: true
                            }}
                        />
                    </div>
                </div>
                <div >
                    <h1 className='text-2xl md:text-3xl text-center font-bold py-5'>Our product add</h1>
                    <div className='w-48 mx-auto'>
                        <Flat
                            progress={60}
                            range={{ from: 0, to: 100 }}
                            sign={{ value: '%', position: 'end' }}
                            text={'Match'}
                            showMiniCircle={true}
                            showValue={true}
                            sx={{
                                strokeColor: '#16a34a',
                                barWidth: 8,
                                bgStrokeColor: '#ffffff',
                                bgColor: { value: '#000000', transparency: '20' },
                                shape: 'full',
                                strokeLinecap: 'round',
                                valueSize: 10,
                                valueWeight: 'bold',
                                valueColor: '#000000',
                                valueFamily: 'Trebuchet MS',
                                textSize: 13,
                                textWeight: 'bold',
                                textColor: '#000000',
                                textFamily: 'Trebuchet MS',
                                loadingTime: 1000,
                                miniCircleColor: '#ff0000',
                                miniCircleSize: 5,
                                valueAnimation: true,
                                intersectionEnabled: true
                            }}
                        />
                    </div>
                </div>
                <div className='w-48 mx-auto'>
                    <h1 className='text-2xl md:text-3xl text-center font-bold py-5'>Our
                        Servises</h1>
                    <Flat
                        progress={50}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        text={'Match'}
                        showMiniCircle={true}
                        showValue={true}
                        sx={{
                            strokeColor: '#16a34a',
                            barWidth: 8,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 10,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default RadialProgressber;