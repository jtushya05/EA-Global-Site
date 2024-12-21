"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoDialogProps {
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoDialog({ videoUrl, onClose }: VideoDialogProps) {
  return (
    <Dialog open={!!videoUrl} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <VisuallyHidden asChild>
          <DialogTitle>Student Testimonial Video</DialogTitle>
        </VisuallyHidden>
        {videoUrl && (
          <div className="relative pt-[56.25%]">
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}