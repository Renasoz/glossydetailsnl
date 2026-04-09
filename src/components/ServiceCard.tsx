import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  startingPrice: string;
}

const ServiceCard = ({ title, description, image, href, startingPrice }: ServiceCardProps) => (
  <Link to={href} className="group block">
    <div className="rounded-2xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={640}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">{startingPrice}</span>
          <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Bekijk pakketten <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default ServiceCard;
