import Image from 'next/image';

interface ServicesProps {
    servicesData: {
        image: string;
        title: string;
        shortText: string;
        viewDetails: string;
        aosDelay: string;
    }[];
    title: string;
}

const Services = ({ servicesData , title}: ServicesProps) => {
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>{title}</h2>
                    </div>

                    <div className="row justify-content-center">
                        {servicesData &&
                            servicesData.map((value, i) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={i}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div className="service-card-one bg-fcfbfb bg-white border-0 text-center">
                                        <Image
                                            src={value.image}
                                            alt="image"
                                            width={200}
                                            height={200}
                                            className="service-image"
                                        />
                                        <h3 className="mt-5">
                                                {value.title}
                                        </h3>
                                        <p>{value.shortText}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
