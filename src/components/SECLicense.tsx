import secLogo from "@/assets/sec-logo.png";

const SECLicense = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quidax is licensed by the Securities and Exchange Commission of Nigeria
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're the first crypto exchange to receive a provisional Digital Assets Exchange license by Nigeria's SEC.
          </p>
          <div className="flex justify-center">
            <img src={secLogo} alt="SEC Nigeria" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SECLicense;
