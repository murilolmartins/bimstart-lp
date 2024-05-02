import { valuesData } from '@/constants/values';
import Image from 'next/image';

const Values = () => {
    return (
        <>
            <div className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos Valores</h2>
                    </div>

                    <div className="row justify-content-center">
                        {valuesData &&
                            valuesData.map((value, i) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={value.title}
                                >
                                    <div className="service-card-one bg-fcfbfb bg-white border-0 text-center">
                                        <Image
                                            src={value.image}
                                            alt="image"
                                            width={200}
                                            height={200}
                                        />
                                        <h3 className="mt-5">{value.title}</h3>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Values;
