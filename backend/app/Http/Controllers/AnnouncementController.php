<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnouncementCollection;
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
        return new AnnouncementCollection(Announcement::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if ($user->role === "administrateur")
        {
            $administrateur = Administrateur::where("user_id", $user->id)->first();
            return $administrateur->announcements()->create($request->all());
        }
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
    public function update(Request $request, Announcement $announcement)
    {
        $updatedAnnouncement = $announcement->update($request->all());
        return $updatedAnnouncement;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement)
    {
        $deletedAnnouncement = $announcement->delete();
        return $deletedAnnouncement;
    }
}
