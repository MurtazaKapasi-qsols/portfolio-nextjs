import client from "@/lib/contentful"
import { Testimonials, TestimonialsSkeleton } from "@/lib/contentful-types"
import { useEffect, useState } from "react";

export const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTestimonials = async () => {
        try {
            setLoading(true)
            setError(null)
        
            const response = await client.getEntries<TestimonialsSkeleton>({
                content_type: 'testimonials',
                limit: 5,
                order: ['-sys.createdAt']
            })
            setTestimonials(response.items as Testimonials[])
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to fetch testimonials')
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchTestimonials()
    }, [])

    return { testimonials, loading, error }
}