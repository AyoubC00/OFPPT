<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use App\Http\Requests\UpdateAnnouncementRequest;
use App\Http\Resources\AnnouncementResource;
use App\Models\Administrateur;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $announcements = Announcement::with('administrateur.user')->get();
        return AnnouncementResource::collection($announcements);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAnnouncementRequest $request)
    {
        $user = Auth::user();
        $administrateur = Administrateur::where("user_id", $user->id)->first();
        $announcement = $administrateur->announcements()->create($request->all());
        return new AnnouncementResource($announcement);
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        return new AnnouncementResource($announcement);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnnouncementRequest $request, Announcement $announcement)
    {
        $updatedAnnouncement = $announcement->update($request->all());
        return new AnnouncementResource($updatedAnnouncement);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement)
    {
        $user = Auth::user();
        if($user->role === "administrateur"){
            $deletedAnnouncement = $announcement->delete();
            return response()->json($deletedAnnouncement);
        }
        else abort(403, "You are not authorized to perform this action.");
    }
}
